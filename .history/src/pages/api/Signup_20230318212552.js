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
    res.status(400).json({ message: 'Unable to sign up with provided credentials.' })
  }
}



export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body

    // Check if the form information is empty
    if (!username || !email || !password) {
      return res.status(400).json({ message: '表格信息不能为空' })
    }

    // Check if the password length meets the requirements
    if (password.length < 6 || password.length > 13) {
      return res.status(400).json({ message: '密码长度必须为6-13位' })
    }

    // check if username already exists
    const existingUsername = await prisma.user.findUnique({
      where: { username }
    })

    if (existingUsername) {
      return res.status(409).json({ message: '用户名已存在，请选择其他用户名' })
    }

    // check if the email already exists
    const existingEmail = await prisma.user.findUnique({
      where: { email }
    })

    if (existingEmail) {
      return res.status(409).json({ message: '该电子邮件已被注册，请选择其他电子邮件' })
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
