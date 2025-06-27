<template>
  <div class="d-flex justify-center">
    <div class="page-container">
      <Logo />
      <p class="headline">Organize suas leituras!</p>
      <p class="subhead">Escolha uma das opções abaixo para continuar.</p>
        <RouterLink to="/login" custom v-slot="{ navigate }">
          <v-btn color="#ffeeee" @click="navigate">
            <span class="btn-text">Entrar</span>
          </v-btn>
        </RouterLink>
        <RouterLink to="/register" custom v-slot="{ navigate }">
          <v-btn color="#7A0017" @click="navigate">
            <span class="btn-text2">Cadastrar</span>
          </v-btn>
        </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 90vh;
  text-align: left;
  padding: 2rem;
  font-family: 'Georgia', serif;
  width: 90%;
  max-width: 450px;
  color: #ffeeee;
}

.headline {
  margin-top: 10px;
  font-size: 1.5rem;
}

.subhead {
  font-size: 1rem;
  margin-bottom: 5px;
}

.v-btn {
  border-color: #ffeeee;
  border-width: 1px;
  margin-top: 20px;
  margin-bottom: -13px;
  border-radius: 100px;
  font-size: 1rem;
  text-transform: none; /* remove uppercase */
  height: 50px;
}

.btn-text {
  color: #7A0017;
}

.btn-text2 {
  color: #ffeeee;
}
</style>
