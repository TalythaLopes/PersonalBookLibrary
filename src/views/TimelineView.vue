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
        >
          <h1 class="text-h2"> Slide {{ n }}</h1>
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

      <v-window v-model="tab" v-if="timeline.length">
        <v-window-item v-for="i in 3" :key="i" :value="'tab-' + i">
          <TimelineList
            :itens="timeline"
            :usuarios="usuarios"
            :livros="livros"
          />
        </v-window-item>
      </v-window>

    </div>
  </v-app>

  <BottomNavBar />
</template>

<script setup lang="ts">
  import CustomNavBar from '@/components/CustomNavBar.vue'
  import BottomNavBar from '@/components/BottomNavBar.vue'
  import TimelineList from '@/components/TimelineList.vue'
  import { ref, onMounted  } from 'vue'
  import axios from '@/axios/api.ts'

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
  min-height: 100vh;
  padding: 0;
  color: #fee;
}
</style>
