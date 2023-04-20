import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import useUser from "../lib/userUser";

export default function Login() {
  // const { usersss } = useUser();
  // console.log(usersss);

  // const { user } = useUser({
  //   redirectTo: '/home',
  // })

  const { mutateUser } = useUser({
    redirectTo: "/home",
    redirectIfFound: true,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const response = await fetch('/api/LoginSession', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    const response = await fetch("/api/LoginSessionNoUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    console.log(data);

    mutateUser(data);
    // Redirect to home page or dashboard
    //0331 update
    // Save user information to local storage
    // localStorage.setItem('userInfo', JSON.stringify(data));
    // Router.push('/test');
    Router.push("/home");
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in
          </h2>
          <Link href="/Signup0318">
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                sign up and start a trip with T2T
              </a>
            </p>
          </Link>
          {/* <img className="lg_img flex" src="https://s1.ax1x.com/2023/03/23/ppdj1YT.png" alt="ppdj1YT.png" width="500px" border="0" /> */}
        </div>

        <div className="container1 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="con_img">
            <img
              className="lg_img flex"
              src="https://s1.ax1x.com/2023/03/23/ppdj1YT.png"
              alt="ppdj1YT.png"
              width="500px"
              border="0"
            />
          </div>
          <div className="con_input bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div className="email">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-blue-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-blue-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <Link href="/forgetPassword">Forgot your password?</Link>
                  </a>
                </div>
              </div>

              <div>
                {error && <p>{error}</p>}
                <button type="submit" className="btn">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <style jsx>{`

  .container1{
    display:flex;
    // background:red;
    padding-top:7%;
    // height:100%;
  }
  .con_img{
    margin-left:-30px;
  }
  .con_input{
    width:600px;
    height:325px;
  }
  .lg_img{
    margin-left:100px;
    margin-bottom:80px;
  }
  .email{
    padding-top:35px;
    // background:red;
  }
  .btn{
    margin-left: 73%;
    margin-top: 15px;
    margin-bottom:20px;
    width: 150px;
    height: 35px;
    border: none;
    background-color: #4B9CD3;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
}

`}</style>
      </div>
    </>
  );
}

// import React from 'react'
// // 0318 update-zq
// import prisma from "../lib/prisma";
// import {compare} from 'bcrypt-nodejs';
// // import jwt from 'jsonwebtoken';

// export async function handler(req,res){
//   if(req.method!=='POST'){
//     res.status(405).json({message:'Method not allowed'});
//     return;
//   }

//   const {email, password}=req.body;

//   //check if the user exists in the database
//   const user =await prisma.User.findUnique({
//     where:{email},
//   });

//   if(!user){
//     res.status(401).json({message:'Invalid email or password'});
//     return;
//   }

//   //compare the password hash with the provided password
//   const passwordsMatch = await compare(password, user.password);

//   if(!passwordsMatch){
//     res.status(401).json({message:'Invalid email or password'});
//     return;
//   }

//   //generate a JWT token and send it in the response
//   // const token = generateJwtToken(user.id);

//   // res.status(200).json({token});
// }

// // function generateJwtToken(userId){
// //   const token = jwt.sign({userId}, process.env.JWT_SECRET,{
// //     expiresIn:'1d',
// //   });
// //   return token;
// // }

// const Login = () => {
//     return (
//         <>
//           <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" >
//             <div className="sm:mx-auto sm:w-full sm:max-w-md">
//               {/* <img
//                 className="mx-auto"
//                 src="/images/T2T.png"
//                 alt="logo"
//                 width="130"
//               /> */}
//               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
//               <p className="mt-2 text-center text-sm text-gray-600">
//                 Or{' '}
//                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   sign up and start a trip with T2T
//                 </a>
//               </p>
//               <img className="lg_img flex" src="https://s1.ax1x.com/2023/03/23/ppdj1YT.png" alt="ppdj1YT.png" width="500px" border="0" />
//             </div>

//             <div className="container mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//               <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//                 <form className="space-y-6" action="#" method="POST">
//                   <div className='email'>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                       Email address
//                     </label>
//                     <div className="mt-1">
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         required
//                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                       Password
//                     </label>
//                     <div className="mt-1">
//                       <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         autoComplete="current-password"
//                         required
//                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <input
//                         id="remember-me"
//                         name="remember-me"
//                         type="checkbox"
//                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-blue-300 rounded"
//                       />
//                       <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-900">
//                         Remember me
//                       </label>
//                     </div>

//                     <div className="text-sm">
//                       <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                         Forgot your password?
//                       </a>
//                     </div>
//                   </div>

//                   <div>
//                     <button
//                       type="submit"
//                       // className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                        className='btn'
//                     >
//                       Sign in
//                     </button>
//                   </div>
//                 </form>

//                 {/* <div className="mt-6">
//                   <div className="relative">
//                     <div className="absolute inset-0 flex items-center">
//                       <div className="w-full border-t border-gray-300" />
//                     </div>
//                     <div className="relative flex justify-center text-sm">
//                       <span className="px-2 bg-white text-gray-500">Or continue with</span>
//                     </div>
//                   </div>

//                   <div className="mt-6 grid grid-cols-3 gap-3">
//                     <div>
//                       <a
//                         href="#"
//                         className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                       >
//                         <span className="sr-only">Sign in with Facebook</span>
//                         <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
//                           <path
//                             fillRule="evenodd"
//                             d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </a>
//                     </div>

//                     <div>
//                       <a
//                         href="#"
//                         className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                       >
//                         <span className="sr-only">Sign in with Twitter</span>
//                         <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
//                         </svg>
//                       </a>
//                     </div>

//                     <div>
//                       <a
//                         href="#"
//                         className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                       >
//                         <span className="sr-only">Sign in with GitHub</span>
//                         <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
//                           <path
//                             fillRule="evenodd"
//                             d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </div>*/}
//               </div>
//             </div>
//             <style jsx>{`
//   .container{
//     // background:red;
//     padding-top:7%;
//   }
//   .lg_img{
//     margin-left:100px;
//     margin-bottom:80px;
//   }
//   .email{
//     padding-top:35px;
//     // background:red;
//   }
//   .btn{
//     margin-left: 73%;
//     margin-top: 15px;
//     margin-bottom:20px;
//     width: 150px;
//     height: 35px;
//     border: none;
//     background-color: #4B9CD3;
//     color: white;
//     border-radius: 5px;
//     cursor: pointer;
// }
// }

// `}</style>
//           </div>
//         </>
//       )
// }

// export default Login
