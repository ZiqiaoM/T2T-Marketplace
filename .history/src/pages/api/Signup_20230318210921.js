import { hash } from 'bcryptjs'
import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { username, email, password } = req.body

  // Hash the password
  const hashedPassword = await hash(password, 10)

  try {
    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    })

    res.status(200).json({ message: 'Signup successful' })
  } catch (error) {
    res.status(400).json({ message: 'Unable to sign up with provided credentials. api-issue' })
  }
}
