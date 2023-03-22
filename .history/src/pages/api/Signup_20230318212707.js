import prisma from '../../lib/prisma'



export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body

    // Check if the form information is empty
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Form information cannot be empty' })
    }

    // Check if the password length meets the requirements
    if (password.length < 6 || password.length > 13) {
      return res.status(400).json({ message: 'Password length must be 6-13 characters' })
    }

    // check if username already exists
    const existingUsername = await prisma.user.findUnique({
      where: { username }
    })

    if (existingUsername) {
      return res.status(409).json({ message: 'Username already exists, please choose another username' })
    }

    // check if the email already exists
    const existingEmail = await prisma.user.findUnique({
      where: { email }
    })

    if (existingEmail) {
      return res.status(409).json({ message: 'This email is already registered, please choose another email' })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    })

    return res.status(201).json({ message: 'Signup successful', user })
  }

  return res.status(404).json({ message: 'Unable to sign up with provided credentials.' })
}
