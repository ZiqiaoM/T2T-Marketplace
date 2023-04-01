import { useState } from 'react';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/forgetPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    //only the email input is required because the purpose of the forget password feature is to allow users who have forgotten their password to reset it. Typically, the user would enter their email address (which they previously used to create their account) and the system would then generate a new password and send it to the user's email address.
    <div>
      <h1>Forget Password</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
