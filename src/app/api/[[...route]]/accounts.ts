import { Hono } from 'hono'
import { accounts } from '@/db/schema'
import { db } from '@/db/drizzle'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'

const app = new Hono().get('/', clerkMiddleware(), async (c) => {
  const auth = getAuth(c)
  if (!auth?.userId) return c.json({ error: 'Unauthorized' }, 401)

  const data = await db.select({ id: accounts.id, name: accounts.name }).from(accounts)
  return c.json({ data })
})

export default app
