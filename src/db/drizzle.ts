import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// for query purposes
const queryClient = postgres(
  'postgres://default:h3kjVmtuRXP2@ep-frosty-pond-a1t04o2c.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require'
)
export const db = drizzle(queryClient)
