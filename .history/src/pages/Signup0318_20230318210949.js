import { useState } from 'react'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      // Send a POST request to the API to create a new user
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })

      // If the API returns a 200 response, redirect the user to the home page
      if (response.ok) {
        window.location.href = '/'
      } else {
        setErrorMessage('Unable to sign up with provided credentials.222')
      }
    } catch (error) {
      setErrorMessage('Unable to sign up with provided credentials.0318')
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
