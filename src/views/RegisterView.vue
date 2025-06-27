<template>
  <div class="login-container">
    <Return />
    <div class="full-screen-center">
      <div class="form-wrapper">
        <h1 class="login-title">Boas-vindas!</h1>
        <h2 class="login-subtitle">Preencha as informações abaixo para começar.</h2>

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
          v-model="email"
          label="Confirmar e-mail"
          variant="outlined"
          color="#7A0017"
          density="comfortable"
          rounded="lg"
          class="input reduced-margin"
        />

        <v-text-field
          v-model="password"
          label="Senha"
          variant="outlined"
          type="password"
          color="#7A0017"
          density="comfortable"
          rounded="lg"
          class="input reduced-margin"
        >
          <template #append-inner>
            <v-btn icon elevation="0" class="back-btn">
              <v-icon color="#7A0017" style="font-size: 1.3rem;">mdi-eye</v-icon>
            </v-btn>
          </template>
        </v-text-field>

        <v-text-field
          v-model="password"
          label="Confirmar senha"
          variant="outlined"
          type="password"
          color="#7A0017"
          density="comfortable"
          rounded="lg"
          class="input reduced-margin"
        >
          <template #append-inner>
            <v-btn icon elevation="0" class="back-btn">
              <v-icon color="#7A0017" style="font-size: 1.3rem;">mdi-eye</v-icon>
            </v-btn>
          </template>
        </v-text-field>

        <RouterLink to="/quote" custom v-slot="{ navigate }">
          <v-btn color="#7A0017" class="login-btn" @click="navigate">Criar a sua conta</v-btn>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Return from '@/components/ReturnToLogin.vue'

const name = ref('')
const username = ref('')
const email = ref('')
const password = ref('')

const login = () => {
  console.log('Login com:', username.value, password.value)
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
</style>
