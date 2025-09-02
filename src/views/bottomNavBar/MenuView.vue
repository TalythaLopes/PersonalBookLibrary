<template>
  <CustomNavBar
    appBarColor="#fee"
    titleColor="#7A0017"
  />
  <Construcao />
  <BottomNavBar />
</template>

<script setup lang="ts">
  import CustomNavBar from '@/components/CustomNavBar.vue'
  import BottomNavBar from '@/components/BottomNavBar.vue'
  import Construcao from '@/components/PageUnderConstruction.vue'
</script>
