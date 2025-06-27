<template>
  <v-app-bar :color="appBarColor" class="custom-nav-bar" density="comfortable">
    <RouterLink to="/profile" custom v-slot="{ navigate }">
      <v-btn icon elevation="0" class="profile-btn" @click="navigate">
        <v-icon :color="titleColor" style="font-size: 3rem;">mdi-account-circle</v-icon>
      </v-btn>
    </RouterLink>

    <div class="app-title" :style="{ color: titleColor }">Book Library</div>

    <v-btn
      v-if="isSearchRoute"
      icon
      class="barcode-btn"
      @click="barcodeSearchAction"
    >
      <v-icon :color="titleColor" style="font-size: 2rem;">mdi-barcode-scan</v-icon>
    </v-btn>
  </v-app-bar>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  appBarColor: {
    type: String,
    default: '#ffeeee',
  },
  titleColor: {
    type: String,
    default: '#7A0017',
  }
})

const route = useRoute()
const isSearchRoute = computed(() => route.path === '/search')

function barcodeSearchAction() {
  console.log('Ação de busca clicada!')
  //////////////////////////// barcode clicked ////////////////////////////
}
</script>

<style scoped>
.custom-nav-bar {
  position: relative;
  padding-left: 0 !important;
  padding-right: 0 !important;
  box-shadow: none !important;
  height: 64px;
}

.profile-btn {
  margin-left: 8px;
  z-index: 1;
  top: 5%;
  left: 1%;
}

.app-title {
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-family: 'Georgia', serif;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
}

.barcode-btn {
  position: absolute;
  right: 8px;
  z-index: 1;
  top: 14%;
}
</style>
