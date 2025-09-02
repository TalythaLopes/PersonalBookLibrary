<template>
  <v-app>
    <v-main :style="{ backgroundColor: getBackgroundColor() }">
      <v-container :style="{ backgroundColor: getBackgroundColor() }">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const getBackgroundColor = () => {
  const name = route.name?.toString().toLowerCase()

  if (name === 'inicial' || name === 'quote') {
    return '#7A0017'
  }
  return '#ffeeee'
}
</script>
