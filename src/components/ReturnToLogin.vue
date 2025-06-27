<template>
  <v-app-bar color="#ffeeee" class="custom-app-bar" density="comfortable">
    <RouterLink to="/" custom v-slot="{ navigate }">
      <v-btn icon elevation="0" class="back-btn" @click="navigate">
        <v-icon color="#7A0017" style="font-size: 2rem;">mdi-chevron-left</v-icon>
      </v-btn>
    </RouterLink>
    <div class="app-title">Book Library</div>
  </v-app-bar>
</template>

<script setup lang="ts">

</script>

<style scoped>
.custom-app-bar {
  position: relative;
  padding-left: 0 !important;
  padding-right: 0 !important;
  box-shadow: none !important;
  height: 64px;
}

.back-btn {
  margin-left: 8px;
  z-index: 1;
}

.app-title {
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-family: 'Georgia', serif;
  font-weight: bold;
  color: #7A0017;
  text-align: center;
  white-space: nowrap;
}
</style>
