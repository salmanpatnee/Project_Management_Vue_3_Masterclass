<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref, onMounted } from 'vue'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)

const fetchTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) console.log(error)
  tasks.value = data
}

onMounted(async () => {
  await fetchTasks()
})
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
    </ul>
  </div>
</template>
