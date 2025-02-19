<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref, onMounted } from 'vue'
import type { Tables } from '../../../database/types'

const projects = ref<Tables<'projects'>[] | null>(null)

const fetchProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*')
  if (error) console.log(error)
  projects.value = data
}

onMounted(async () => {
  await fetchProjects()
})
</script>

<template>
  <div>
    <h1>Projects</h1>
    {{ projects && projects[0] }}
  </div>
</template>
