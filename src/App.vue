<script setup lang="ts"></script>

<template>
  <nav class="flex justify-between items-center h-16 border-b bg-muted/40 px-6">
    <form class="w-full max-w-96">
      <input type="search" class="w-full pl-8 bg-background" placeholder="Search..." />
    </form>
    <div class="w-8 h-8 rounded-full bg-white"></div>
  </nav>
  <router-view />
</template>
