<template>
    <div class="d-flex justify-center">
        <div class="page-container">
            <Logo />
            <div class="citation-container d-flex justify-center">
                <img src="@/assets/quote.png" alt="Aspas" class="aspas" />
                <div class="quote-container">
                    <blockquote>{{ randomQuote.text }}</blockquote>
                    <cite>{{ randomQuote.author }}</cite>
                </div>
            </div>
            <div class="d-flex flex-row-reverse">
              <RouterLink to="/timeline" custom v-slot="{ navigate }">
                <v-btn icon color="#fee" class="login-btn" @click="navigate">
                  <v-icon color="#7A0017" style="font-size: 2rem;">mdi-chevron-right</v-icon>
                </v-btn>
              </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Logo from '@/components/Logo.vue'

const randomQuote = ref({ text: '', author: '' })

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/quotes')
    const data = await response.json()

    if (Array.isArray(data) && data.length > 0) {
      const index = Math.floor(Math.random() * data.length)
      randomQuote.value = data[index]
    } else {
      console.warn('Nenhuma citação encontrada.')
    }
  } catch (error) {
    console.error('Erro ao buscar citações:', error)
  }
})

</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  font-family: 'Georgia', serif;
  width: 90%;
  max-width: 800px;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.logo {
  height: 55px;
  width: 70px;
  margin-right: 1rem;
}

.logo-text {
  font-size: 2rem;
  color: #ffeeee;
  font-family: 'Georgia', serif;
  font-weight: bold;
}

.citation-container {
  display: flex;
  align-items: center;
  font-family: 'Georgia', serif;
}

.aspas {
  height: 20px;
  width: 20px;
  margin-left: 7px;
}

.quote-container {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-family: 'Georgia', serif;
}

blockquote {
  font-size: 1.4rem;
  font-style: italic;
  color: #cecece;
}

cite {
  font-size: 1rem;
  display: inline-block;
  margin-top: 1rem;
  color: #c2c2c2;
}
</style>
