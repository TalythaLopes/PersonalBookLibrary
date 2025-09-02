<template>
  <div class="login-container">
    <Return />
     <div class="full-screen-center">
      <div class="form-wrapper">
        <h1 class="login-title">Bom te ver de novo!</h1>
        <h2 class="login-subtitle">Digite seu e-mail ou nome de usuário para acessar sua conta.</h2>
        <form @submit.prevent="handleLogin">
          <v-text-field
            v-model="username"
            label="E-mail ou nome de usuário"
            variant="outlined"
            color="#7A0017"
            density="comfortable"
            rounded="lg"
            class="input reduced-margin"
          />

          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            variant="outlined"
            color="#7A0017"
            density="comfortable"
            rounded="lg"
            class="input reduced-margin"
          >
            <template #append-inner>
              <v-btn icon elevation="0" class="back-btn" @click.prevent="showPassword = !showPassword">
                <v-icon color="#7A0017" style="font-size: 1.3rem;">{{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
              </v-btn>
            </template>
          </v-text-field>

          <div class="forgot-password" @click="dialog = true">
            <v-btn variant="text" class="forgot-btn" color="#7A0017">
              Esqueci minha senha
              <v-icon class="forgot-icon" style="font-size: 1rem;">mdi-chevron-right</v-icon>
            </v-btn>
          </div>

          <v-btn color="#7A0017" class="login-btn" type="submit">Entrar na sua conta</v-btn>
          <p v-if="erro" class="erro-msg">{{ erro }}</p>

          <v-dialog v-model="dialog" max-width="400">
            <v-card class="forgot-container">
              <v-card-title class="forgot-text">Recuperar senha</v-card-title>
              <v-card-text>
                <div v-if="!codigoEnviado">
                  <v-text-field
                    v-model="emailRecuperacao"
                    label="Confirme seu e-mail"
                    color="#fee"
                    type="email"
                    variant="outlined"
                    density="comfortable"
                    min-width="350"
                    class="forgot-input reduced-margin"
                  />
                </div>
                <div v-else>
                  <v-text-field
                    v-model="codigoInserido"
                    label="Insira o código enviado"
                    color="#fee"
                    variant="outlined"
                    density="comfortable"
                    min-width="350"
                    class="forgot-input reduced-margin"
                  />
                  <v-text-field
                    v-model="novaSenha"
                    label="Nova senha"
                    color="#fee"
                    variant="outlined"
                    type="password"
                    density="comfortable"
                    min-width="350"
                    class="forgot-input reduced-margin"
                  />
                </div>
                <p v-if="erroRecuperacao" class="forgot-erro">{{ erroRecuperacao }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="#fee" text @click="dialog = false">Cancelar</v-btn>
                <v-btn
                  text
                  color="#fee"
                  @click="codigoEnviado ? confirmarCodigo() : enviarCodigo()"
                >
                  {{ codigoEnviado ? 'Confirmar' : 'Enviar código' }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from '../../plugins/axios.ts'
  import Return from '../../components/ReturnToLogin.vue'

  const email = ref('')
  const username = ref('')
  const password = ref('')
  const erro = ref('')

  const router = useRouter()

  const showPassword = ref(false)

  const tentativas = ref(0)

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users')
      const allUsers = response.data
      const user = allUsers.find((u: any) =>
        u.username === username.value || u.email === username.value
      )

      if (!user) {
        erro.value = 'Usuário não encontrado.'
        return
      }

      if (user.senha === password.value) {
        erro.value = ''
        dialog.value = false

        await axios.patch(`http://localhost:3000/users/${user.id}`, {
          tentativas: 0
        })

        router.push('/quote')
      } else {
        const novasTentativas = (user.tentativas || 0) + 1

        await axios.patch(`http://localhost:3000/users/${user.id}`, {
          tentativas: novasTentativas
        })

        if (novasTentativas >= 3) {
          erro.value = 'Muitas tentativas! Redirecionando para recuperação de senha.'
          dialog.value = true
        } else {
          erro.value = `Senha incorreta. Tentativa ${novasTentativas} de 3.`
        }
      }
    } catch (err) {
      console.error(err)
      erro.value = 'Erro ao tentar fazer login.'
    }
  }

  import emailjs from '@emailjs/browser'

  emailjs.init('U1BL2fi2ssu2yzRLi')

  const dialog = ref(false)
  const emailRecuperacao = ref('')
  const codigoInserido = ref('')
  const novaSenha = ref('')
  const erroRecuperacao = ref('')
  const codigoGerado = ref('')
  const codigoEnviado = ref(false)

  const enviarCodigo = async () => {
    erroRecuperacao.value = ''
    if (!emailRecuperacao.value) {
      erroRecuperacao.value = 'Preencha o e-mail.'
      return
    }

    const res = await axios.get('http://localhost:3000/users', {
      params: { email: emailRecuperacao.value }
    })

    if (res.data.length === 0) {
      erroRecuperacao.value = 'E-mail não encontrado.'
      return
    }

    codigoGerado.value = Math.floor(100000 + Math.random() * 900000).toString()

    try {
      //TEM LIMITE DE REQUISIÇÕES!!!! evita usar plmr, testa e acabou, segue a vida
      await emailjs.send(
        'service_71dy59e',
        'template_ex8hko8',
        {
          to_email: emailRecuperacao.value,
          passcode: codigoGerado.value
        },
        'U1BL2fi2ssu2yzRLi'
      )
      codigoEnviado.value = true
    } catch (e) {
      erroRecuperacao.value = 'Erro ao enviar e-mail.'
      console.error('Erro do EmailJS:', e)
    }
  }

  const confirmarCodigo = async () => {
    if (codigoInserido.value !== codigoGerado.value) {
      erroRecuperacao.value = 'Código inválido.'
      return
    }

    const res = await axios.get('http://localhost:3000/users', {
      params: { email: emailRecuperacao.value }
    })

    const user = res.data[0]

    await axios.patch(`http://localhost:3000/users/${user.id}`, {
      senha: novaSenha.value,
      tentativas: 0
    })

    dialog.value = false
    erroRecuperacao.value = ''
    codigoInserido.value = ''
    novaSenha.value = ''
    emailRecuperacao.value = ''
    codigoGerado.value = ''
    codigoEnviado.value = false
  }
</script>

<style scoped>
.login-container {
  height: calc(100vh - 170px);
  font-family: 'Georgia', serif;
}

.full-screen-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form-wrapper {
  width: 100%;
  max-width: 400px;
  margin-top: 60px;
  padding: 2rem;
  background-color: #ffeeee;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(122, 0, 23, 0.15);
}

.login-title {
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: -4px;
  color: #7A0017;
}

.login-subtitle {
  text-align: left;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: #7A0017;
}

.reduced-margin {
  margin-bottom: -13px; /* ou qualquer valor menor, como 4px */
}

.forgot-password {
  text-align: left;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: #7A0017;
  text-decoration: none;
  font-weight: bold;
}

.forgot-password a {
  color: #7A0017;
  text-decoration: none;
}

.forgot-icon {
  position: relative;
  top: -1px;
}

.login-btn {
  width: 100%;
  color: #ffeeee;
  border-radius: 100px;
  font-size: 1rem;
  text-transform: none; /* remove uppercase */
  height: 50px;
}

.erro-msg {
  color: #7A0017;
  font-size: 0.85rem;
  margin-top: 1rem;
  margin-bottom: -1rem;
  text-align: center;
}

.input {
  color: #7A0017;
}

.back-btn {
  background-color: transparent !important;
  box-shadow: none !important;
  z-index: 0;
}

.forgot-btn {
  text-transform: none;
  font-size: 1rem;
}

.forgot-container {
  font-family: 'Georgia', serif;
  background-color: #7A0017;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.forgot-text {
  color: #fee;
  font-weight: bold;
  font-size: 1.8rem;
}

.forgot-input {
  color: #fee;
}

.forgot-erro {
  color: #fee;
  font-size: 0.85rem;
  margin-top: 0rem;
  margin-bottom: -1.25rem;
  text-align: center;
}

</style>
