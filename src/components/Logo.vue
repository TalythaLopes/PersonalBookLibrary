<template>
    <div class="logo-container">
        <img src="@/assets/book.png" alt="Logo do Livro" class="logo" />
        <span class="logo-text">Book Library</span>
    </div>
</template>

<script setup lang="ts">

</script>

<style> 
.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;  
  background-color: #7A0017;
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
</style>