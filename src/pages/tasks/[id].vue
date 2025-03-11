<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Task - {{ route.params?.id }}</h1>
    <router-link :to="{ name: '/tasks/' }">Tasks</router-link>
  </div>
</template>
