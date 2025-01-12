import dbConnect from '@/lib/db/mongo'

await dbConnect()

export { POST } from './post'
export { GET } from './get'