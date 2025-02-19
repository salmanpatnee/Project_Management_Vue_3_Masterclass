<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

const projects = ref<any[] | null>([])

const fetchProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*')
  if (error) console.log(error)
  projects.value = data
}

fetchProjects()
</script>

<template>
  <div>
    <h1>Projects</h1>
    {{ projects }}
  </div>
</template>
