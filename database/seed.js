import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

const seedProjects = async (numProjects = 10) => {
  const projects = []

  for (let i = 0; i < numProjects; i++) {
    const name = faker.lorem.words(3)
    projects.push({
      name,
      slug: name.toLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3, 4]),
    })
  }

  try {
    const { error } = await supabase.from('projects').insert(projects)

    if (error) {
      throw error
    }
  } catch (error) {
    console.error('Error seeding projects:', error.message)
    throw error
  }
}

await seedProjects(50)
