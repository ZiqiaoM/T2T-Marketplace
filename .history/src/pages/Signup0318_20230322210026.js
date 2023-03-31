import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import svg1 from 'https://imgloc.com/i/YuuY3';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

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
    // Navigate to homepage
    // if(res.status===201){
      router.push('/home');
    // }

  };

  return (
    <div className='container flex mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <div className='form'>
    <form onSubmit={handleSubmit}>
      
      {error && <p>{error}</p>}
      <label className='d-flex align-items-center'>
        <div className='text block text-sm font-medium text-gray-700'>Username </div>
        <input type="text" className="inputSP appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className='d-flex align-items-center'>
      <div className='text block text-sm font-medium text-gray-700'>Email</div>
        <input type="email" className="inputSP appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className='d-flex align-items-center'>
      <div className='text block text-sm font-medium text-gray-700'>Password</div>
        <input type="password" className="inputSP appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label className='d-flex align-items-center'>
      <div className='text block text-sm font-medium text-gray-700'>Confirm Password</div>
        <input
          type="password"
          value={passwordConfirmation}
          className="inputSP appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </label>
      <button type="submit" className='btn'>Sign Up</button>
      <div className='nd_signin'><Link href='/Login'><p>Already have an account? <br/> Back to Sign In</p></Link></div>
      
    </form>
    
    </div>
    
    </div>
    <div>
    <h4 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign Up</h4>
    <img className="sp_img" src="https://s1.ax1x.com/2023/03/23/ppdv22F.png" alt="Sign up" border="0" />
    </div>
<style jsx>{`
.container{
  width:1000px;
   margin:60px 15%;
}
.form{
  margin-top:30px;
}
.text{
     width:200px;
    //  color: #26628a;
    margin-right:20px;
}
.inputSP{
    height:35px;
    border: none;
    margin:5px;
    // border-radius: 10px;
    // background-color:#d8e9f4;
}
.btn{
    margin-left: 59%;
    margin-top: 25px;
    width: 150px;
    height: 35px;
    border: none;
    background-color: #4B9CD3;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
.nd_signin{
  margin-top:25px;
  padding-bottom:10px;
  color:#4B9CD3;
  font-size: small;
  cursor: pointer;
}
.nd_signin a{
  color: #4B9CD3 !important;
}
.nd_signin a:hover{
  color: #26628a;
}
.sp_img{
  margin-left:50px;
  width:500px;
}


`}</style>
</div>
  );
  
}
