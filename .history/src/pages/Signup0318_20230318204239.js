import { useState } from 'react'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

// const prisma = new PrismaClient();

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
      // Create a new user in the database
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      })

      // Redirect the user to the home page
      window.location.href = '/'
    } catch (error) {
      setErrorMessage('Unable to sign up with provided credentials.')
    }
  }

  return (
    <div>
      <h1>Sign up</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}
