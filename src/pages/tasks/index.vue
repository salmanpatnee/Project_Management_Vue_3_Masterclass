<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref, onMounted, h } from 'vue'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTable from '@/components/datatable.vue'

interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
]
const data = ref<Payment[]>([])

const tasks = ref<Tables<'tasks'>[] | null>(null)

const fetchTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) console.log(error)
  tasks.value = data
}

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ]
}

onMounted(async () => {
  await fetchTasks()
  data.value = await getData()
})
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <DataTable :columns="columns" :data="data" />

    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
    </ul>
  </div>
</template>
