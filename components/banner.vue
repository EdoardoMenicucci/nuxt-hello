<template>
  <div class="banner">
    <h1>Sono un banner ({{ $route.path }})</h1>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.banner {
  height: 4rem;
  background-color: #555;
  color: white;
  text-align: center;
}
</style>