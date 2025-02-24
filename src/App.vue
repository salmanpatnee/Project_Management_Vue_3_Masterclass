<script setup lang="ts">
import TopNav from '@/components/layout/TopNav.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
</script>

<template>
  <AppSidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNav />
    <main>
      <RouterView />
    </main>
  </div>
</template>
