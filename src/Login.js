import React from 'react';
import logo from "./T2T.png";
import svg1 from './login_Blooming.png';
import './Login.css';

function Login() {
  return (
    <div className='Loginpage'>
        <div className='Login_container'>
            <div className='lg_container1'>
                <img src={svg1} alt='blooming' height='400' />
            </div>
            <div className='lg_container2'>
                <form className='lg_form'>
                    <div className='logo'>
                        <img src={logo}  alt="logo" width='130' />
                    </div>
                    <div>
                        <input type="text" className='input' placeholder='Your email' />
                    </div>
                    <div>
                        <input type="password" className='input' placeholder='Password'/>
                    </div>

                    <button className='lg_btn'>Sign In</button>
                    <p className='lg_p1'>Forget Password?</p>
                </form>
                <div className='nd_signup'>
                    <p>Don't have an account yet?</p>
                    <p>Create a account</p>                   
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login