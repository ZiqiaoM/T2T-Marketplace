import { useState } from 'react';
import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      // Create user
      const user = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
        },
      });

      console.log(user);

      // Reset form and state
      setUsername('');
      setPassword('');
      setError('');
    } catch (error) {
      console.error(error);
      setError('An error occurred while signing up. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}