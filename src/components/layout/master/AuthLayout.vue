<script setup lang="ts">
import AppSidebar from '../AppSidebar.vue'
import TopNav from '../TopNav.vue'
</script>

<template>
  <AppSidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNav />

    <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">Page Title</h1>
      </div>
      <slot />
    </main>
  </div>
</template>
