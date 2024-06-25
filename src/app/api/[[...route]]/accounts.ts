import { Hono } from 'hono'
import { accounts } from '@/db/schema'
import { db } from '@/db/drizzle'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { eq } from 'drizzle-orm'

const app = new Hono().get('/', clerkMiddleware(), async (c) => {
  const auth = getAuth(c)
  if (!auth?.userId) return c.json({ error: 'Unauthorized' }, 401)

  console.log(auth.userId)

  const data = await db
    .select({ id: accounts.id, name: accounts.name })
    .from(accounts)
    .where(eq(accounts.userId, auth.userId))
  return c.json({ data })
})

export default app
