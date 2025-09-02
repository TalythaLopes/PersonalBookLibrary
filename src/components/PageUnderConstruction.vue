<template>
    <div class="construcao-container">
      <img src="@/assets/images/construcao-dark.png" alt="Pagina em construção" class="contrucao" />
      <p class="construcao-text">Página em construção!</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.contrucao {
  height: 250px;
  width: 250px;
}

.construcao-text{
  font-size: 2rem;
  color: #7A0017;
  font-family: 'Georgia', serif;
  font-weight: bold;
  margin-top: -30px;
}

.construcao-container {
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20%;

  /*border: 4px solid #7A0017;
  border-radius: 12px;
  padding: 2rem;*/
}
</style>

