<template>
  <div class="login-container">
    <Return />
     <div class="full-screen-center">
      <div class="form-wrapper">
        <h1 class="login-title">Bom te ver de novo!</h1>
        <h2 class="login-subtitle">Digite seu e-mail ou nome de usuário para acessar sua conta.</h2>

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
          label="Senha"
          variant="outlined"
          type="password"
          color="#7A0017"
          density="comfortable"
          rounded="lg"
          class="input reduced-margin"
        />

        <div class="forgot-password">
          <a href="/forgot-password">Esqueci minha senha</a>
          <v-icon class="forgot-icon" color="#7A0017" style="font-size: 1rem;">mdi-chevron-right</v-icon>
        </div>

        <RouterLink to="/quote" custom v-slot="{ navigate }">
          <v-btn color="#7A0017" class="login-btn" @click="navigate">Entrar na sua conta</v-btn>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Return from '@/components/ReturnToLogin.vue'

const username = ref('')
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

.reduced-margin {
  margin-bottom: -13px; /* ou qualquer valor menor, como 4px */
}

.forgot-password {
  text-align: left;
  font-size: 0.75rem;
  margin-bottom: 2rem;
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
</style>
