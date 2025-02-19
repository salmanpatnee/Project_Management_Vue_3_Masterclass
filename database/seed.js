import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

const logErrorAndExit = (tableName, error) => {
  console.error(
    `An error occurred in table '${tableName}' with code ${error.code}: ${error.message}`,
  )
  process.exit(1)
}

const logStep = (stepMessage) => {
  console.log(stepMessage)
}
const seedProjects = async (numProjects = 10) => {
  logStep('Seeding projects...')
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
    const { data, error } = await supabase.from('projects').insert(projects).select('id')

    if (error) {
      return logErrorAndExit('Projects', error)
    }
    logStep('Projects seeded successfully.')
    return data
  } catch (error) {
    console.error('Error seeding projects:', error.message)
    return logErrorAndExit('Projects', error)
  }
}

await seedProjects(50)
