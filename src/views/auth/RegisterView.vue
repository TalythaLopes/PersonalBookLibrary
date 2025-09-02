<template>
  <div class="login-container">
    <Return />
    <div class="full-screen-center">
      <div class="form-wrapper">
        <h1 class="login-title">Boas-vindas!</h1>
        <h2 class="login-subtitle">Preencha as informações abaixo para começar.</h2>
        <form @submit.prevent="criarConta">
          <v-text-field
            v-model="name"
            label="Nome e sobrenome"
            variant="outlined"
            color="#7A0017"
            density="comfortable"
            rounded="lg"
            class="input reduced-margin"
          />

          <v-text-field
            v-model="username"
            label="Usuário"
            variant="outlined"
            color="#7A0017"
            density="comfortable"
            rounded="lg"
            class="input reduced-margin"
          >
            <template #prepend-inner>
              <v-icon color="#7A0017" style="font-size: 1.3rem;">mdi-at</v-icon>
            </template>
          </v-text-field>

          <v-text-field
            v-model="email"
            label="E-mail"
            variant="outlined"
            color="#7A0017"
            density="comfortable"
            rounded="lg"
            class="input reduced-margin"
          />

          <v-text-field
            v-model="confirmEmail"
            label="Confirmar e-mail"
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

          <v-text-field
            v-model="confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            label="Confirmar senha"
            variant="outlined"
            color="#7A0017"
            density="comfortable"
            rounded="lg"
            class="input reduced-margin"
          >
            <template #append-inner>
              <v-btn icon elevation="0" class="back-btn" @click.prevent="showConfirmPassword = !showConfirmPassword">
                <v-icon color="#7A0017" style="font-size: 1.3rem;">{{ showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
              </v-btn>
            </template>
          </v-text-field>

          <v-btn type="submit" color="#7A0017" class="login-btn">Criar a sua conta</v-btn>
          <p v-if="erro" class="erro-msg">{{ erro }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/plugins/axios'
import Return from '@/components/ReturnToLogin.vue'

const name = ref('')
const username = ref('')
const email = ref('')
const confirmEmail = ref('')
const password = ref('')
const confirmPassword = ref('')
const erro = ref('')

const router = useRouter()

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const criarConta = async () => {
  erro.value = ''

  if (!name.value || !username.value || !email.value || !password.value) {
    erro.value = 'Preencha todos os campos obrigatórios.'
    return
  }

  if (email.value !== confirmEmail.value) {
    erro.value = 'Os e-mails não coincidem.'
    return
  }

  if (password.value !== confirmPassword.value) {
    erro.value = 'As senhas não coincidem.'
    return
  }

  try {
    const existing = await axios.get('http://localhost:3000/users', {
      params: {
        email: email.value
      }
    })

    const userByUsername = await axios.get('http://localhost:3000/users', {
      params: {
        username: username.value
      }
    })

    if (existing.data.length > 0 || userByUsername.data.length > 0) {
      erro.value = 'E-mail ou nome de usuário já está em uso.'
      return
    }

    //precisa criar todos os outros campos ainda, não lida com id
    await axios.post('http://localhost:3000/users', {
      nome: name.value,
      username: username.value,
      email: email.value,
      senha: password.value,
      tentativas: 0,
      avatar: "",
      amigos: [],
      estante: []
    })

    router.push('/quote')
  } catch (e) {
    console.error(e)
    erro.value = 'Erro ao criar conta. Tente novamente.'
  }
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
  margin-bottom: 1rem;
  color: #7A0017;
}

:deep(.v-field__prepend-inner .v-icon) {
  color: #7A0017 !important;
  opacity: 1 !important;
}

.back-btn {
  background-color: transparent !important;
  box-shadow: none !important;
  z-index: 0;
}

.reduced-margin {
  margin-bottom: -15px;
}

.login-btn {
  width: 100%;
  color: #ffeeee;
  border-radius: 100px;
  font-size: 1rem;
  text-transform: none;
  margin-top: 10px;
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
</style>
