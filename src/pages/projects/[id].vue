<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div>
    <h1>Project - {{ id }}</h1>
    <router-link :to="{ name: '/projects/' }">Projects</router-link>
  </div>
</template>
