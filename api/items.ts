import { VercelRequest, VercelResponse } from '@vercel/node'
import { getItems } from '../lib/items'

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const items = await getItems()
    res.status(200).json(items)
  } catch (error) {
    const message = 'There was an error while retrieving items.'
    console.error(message, error)
    res.status(500).json({ message })
  }
}
