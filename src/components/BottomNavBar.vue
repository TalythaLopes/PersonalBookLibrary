<template>
  <v-bottom-navigation
    v-model="selectedView"
    color="#7A0017"
    grow
    class="bottom-nav"
    style="background-color: #ffeeee;"
  >
    <v-btn>
      <v-icon>mdi-home-variant-outline</v-icon>
      Home
    </v-btn>
    <v-btn>
      <v-icon>mdi-magnify</v-icon>
      Search
    </v-btn>
    <v-btn>
      <v-icon>mdi-account-circle-outline</v-icon>
      Profile
    </v-btn>
    <v-btn>
      <v-icon>mdi-bookshelf</v-icon>
      Bookshelf
    </v-btn>
    <v-btn>
      <v-icon>mdi-menu</v-icon>
      Menu
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const paths = ['/timeline', '/search', '/profile', '/library', '/menu']

const router = useRouter()
const route = useRoute()

const selectedView = ref(paths.indexOf(route.path))

watch(() => route.path, (newPath) => {
  const index = paths.indexOf(newPath)
  selectedView.value = index !== -1 ? index : 0
})

watch(selectedView, (newIndex) => {
  const newPath = paths[newIndex]
  if (route.path !== newPath) {
    router.push(newPath)
  }
})

if (selectedView.value === -1) {
  selectedView.value = 0
  router.replace(paths[0])
}
</script>
