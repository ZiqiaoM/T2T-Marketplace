import { useState } from 'react';
import Router from 'next/router';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Validate form input
    if (!username || !email || !password || !passwordConfirmation) {
      setError('All fields are required.');
      return;
    }

    if (password !== passwordConfirmation) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6 || password.length > 13) {
      setError('Password must be between 6 and 13 characters.');
      return;
    }

    // Check if username or email already exists
    const res = await fetch('/api/Signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, }),
    });

    if (res.status === 409) {
      setError('An account with that username or email already exists. Please log in.');
      return;
    }

    if (!res.ok) {
      setError('Something went wrong. Please try again later.');
      return;
    }

    // Create user
    const user = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    }).then((r) => r.json());

    if (user.error) {
      setError(user.error);
      return;
    }

    // Navigate to dashboard
    Router.push('/dashboard');
  };

  return (
    <div className='container mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <h4>Sign Up</h4>
      {error && <p>{error}</p>}
      <label className='d-flex align-items-center'>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className='d-flex align-items-center'>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className='d-flex align-items-center'>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label className='d-flex align-items-center'>
        Confirm Password:
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </label>
      <button type="submit" className='btn'>Sign Up</button>
    </form>
    </div>

<style jsx>{`
.container{width:500px; background:blue; margin:60px 30%;}
.form{background:red}

.btn{
    margin-left: 73%;
    margin-top: 25px;
    width: 150px;
    height: 30px;
    border: none;
    background-color: #4B9CD3;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
`}</style>
</div>
  );
  
}
