<template>
  <CustomNavBar
    appBarColor="#7A0017"
    titleColor="#fee"
  />
  <div class="top-section d-flex align-center justify-center">
    <v-window
    v-model="onboarding"
    show-arrows="hover"
    >
      <v-window-item class="align-center justify-center"
      v-for="n in length"
      :key="`card-${n}`"
      >
        <v-card
        class="slide d-flex align-center justify-center ma-2"
        elevation="2"
        height="200"
        color="#ffeeee"
        > <div class="construcao-container">
            <img src="@/assets/images/construcao-dark.png" alt="Pagina em construção" class="contrucao" />
            <p class="construcao-text">Slide em construção!</p>
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
  <v-app>
    <div class="bottom-section">
      <v-tabs v-model="tab" align-tabs="center" color="#7A0017" stacked>
        <v-tab value="tab-1">
          <v-icon color="#7A0017" style="font-size: 2.5rem;" icon="mdi-web" />
        </v-tab>
        <v-tab value="tab-2">
          <v-icon color="#7A0017" style="font-size: 2.3rem;" icon="mdi-book-edit-outline" />
        </v-tab>
        <v-tab value="tab-3">
          <v-icon color="#7A0017" style="font-size: 2.8rem;" icon="mdi-account-multiple-outline" />
        </v-tab>
      </v-tabs>

      <v-window v-model="tab" class="mt-4">
        <v-window-item value="tab-1">
          <!-- TimelineList :itens="timeline" :usuarios="usuarios" :livros="livros" /-->
          <Construcao />
        </v-window-item>

        <v-window-item value="tab-2">
          <!-- TimelineList :itens="timeline" :usuarios="usuarios" :livros="livros" /-->
          <Construcao />
        </v-window-item>

        <v-window-item value="tab-3">
          <!-- TimelineList :itens="timeline" :usuarios="usuarios" :livros="livros" /-->
          <Construcao />
        </v-window-item>
      </v-window>>
    </div>
  </v-app>
  <BottomNavBar />
</template>

<script setup lang="ts">
  import CustomNavBar from '../../components/CustomNavBar.vue'
  import BottomNavBar from '../../components/BottomNavBar.vue'
  import TimelineList from '../../components/TimelineList.vue'
  import Construcao from '../../components/PageUnderConstruction.vue'
  import { ref, onMounted  } from 'vue'
  import axios from '../../plugins/axios'

  const length = ref(3)
  const onboarding = ref(0)
  const tab = ref('tab-1')

  const timeline = ref([])
  const usuarios = ref([])
  const livros = ref([])

onMounted(async () => {
  try {
    const [timelineRes, usuariosRes, livrosRes] = await Promise.all([
      axios.get('/timeline'),
      axios.get('/users'),
      axios.get('/books')
    ])

    timeline.value = timelineRes.data
    usuarios.value = usuariosRes.data
    livros.value = livrosRes.data
  } catch (error) {
    console.error('Erro ao carregar dados da API:', error)
  }
})

</script>

<style scoped>
.top-section {
  background-color: #7A0017;
  margin-top: -10px;
  margin-left: -400px;
  margin-right: -400px;
}

.slide{
  min-width: 350px;
}

.text-h2 {
  color: #7A0017;
}

.bottom-section {
  background-color: #fee;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  color: #fee;
}

.contrucao {
  height: 120px;
  width: 120px;
}

.construcao-text{
  font-size: 1rem;
  color: #7A0017;
  font-family: 'Georgia', serif;
  font-weight: bold;
  margin-top: -20px;
}

.construcao-container {
  flex-direction: column;
  align-items: center;
  text-align: center;

  /*border: 4px solid #7A0017;
  border-radius: 12px;
  padding: 2rem;*/
}
</style>
