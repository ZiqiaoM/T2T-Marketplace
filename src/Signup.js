import React from 'react';
import logo from "./T2T.png";
import svg1 from './signup_appreciation.svg';
import './Signup.css';

function Signup() {
  return (
    <div className='Signuppage'>
        <div className='Signup_container'>
            <div className='sp_container1'>
                <form className='lg_form'>
                    <div className='logo'>
                        <img src={logo}  alt="logo" width='130' />
                    </div>
                    <div className='email_refer'>
                        <div className='edu_email'>
                            <h3 className='subtitle'>Erolled student</h3>
                            <div className='email_content'>
                                <p>Your edu email</p>
                                <div className='verify'>
                                    <input type='text' className='input' placeholder='Your edu email' />
                                    <button className='veri_btn'>Verify</button> 
                                </div>
                            </div>
                        </div>
                        <div className='refer_email'>
                            <h3 className='subtitle'>Non-erolled student</h3>
                            <div className='email_content'>
                                <p>Your email</p>
                                <div className='verify'>
                                    <input type='text' className='input' placeholder='Your email' />
                                    <button className='veri_btn'>Verify</button> 
                                </div>
                                <div className='invite'>
                                    <p className='inv_p'>Invite code</p>
                                    <input type='text' className='input2' placeholder='Your invite code' /> 
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='User_info'>
                        <div className='info'>
                            <p>First Name</p>
                            <input type='text' className='input' placeholder='First Name' />
                        </div>
                        <div>                        
                            <p>Last Name</p>
                            <input type='text' className='input' placeholder='Last Name' /> 
                        </div>                    
                    </div>
                    <div className='user_name'>
                        <p>T2T Username</p>
                        <input type='text' className='input' placeholder='User Name' /> 
                    </div>
 
                    <div className='sp_pwd'>
                        <div className='info'>
                            <p>Password</p>
                            <input type="password" className='input' placeholder='Password'/>
                        </div>
                        <div className='info'>
                            <p>Re-enter password</p>
                            <input type="password" className='input' placeholder='Re-enter password'/>
                        </div>                       
                    </div>
                    <button className='sp_btn'>Sign Up</button>
                </form>
                <div className='nd_signin'>
                    <p>Already have an account?</p>
                    <p>Back to signin</p>                   
                </div>
            </div>
            <div className='sp_container2'>
                <img src={svg1} alt='welcome' className='svg1' width='300'/>
            </div>
        </div>

    </div>
  )
}

export default Signup