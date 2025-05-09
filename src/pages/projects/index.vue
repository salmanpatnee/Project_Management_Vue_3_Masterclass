<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref, onMounted, h } from 'vue'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTable from '@/components/datatable.vue'
import { RouterLink } from 'vue-router'

const columns: ColumnDef<Tables<'projects'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Project'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.slug}`,
          class: 'text-left font-medium hover:bg-muted block w-full',
        },
        () => row.getValue('name'),
      )
    },
  },

  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left font-medium' },
        JSON.stringify(row.getValue('collaborators')),
      )
    },
  },
]

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
    <DataTable v-if="projects" :columns="columns" :data="projects" />
  </div>
</template>
