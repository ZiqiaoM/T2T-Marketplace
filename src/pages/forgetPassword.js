import Link from "next/link";
import { useState } from "react";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const response = await fetch("/api/forgetPassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    console.log(data.message);
  };
  return (
    <div className="container flex mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="form">
          <h3 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Reset Password
          </h3>
          <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label className="d-flex align-items-center">
              <div className="text block text-sm font-medium text-gray-700">
                Your email{" "}
              </div>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="inputSP appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="name@company.com"
                required
              />
            </label>
            <label className="d-flex align-items-center">
              <div className="text block text-sm font-medium text-gray-700">
                New Password
              </div>
              <input
                type="email"
                className="inputSP appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            <label className="d-flex align-items-center">
              <div className="text block text-sm font-medium text-gray-700">
                Confirm password
              </div>
              <input
                type="password"
                className="inputSP appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </label>

            <button type="submit" className="btn">
              Reset passwod
            </button>
            <div className="nd_signin">
              <Link href="/Login">
                <p>
                  Already have an account? <br /> Back to Sign In
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h4 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Forget Password
        </h4>
        {/* <img className="sp_img" src="https://s1.ax1x.com/2023/03/23/ppdv22F.png" alt="Sign up" border="0" /> */}
        <p className="mt-2 text-center text-sm text-gray-600">
          {" "}
          Hey, there. Welcome to join us!
        </p>
        <img
          className="sp_img"
          src="https://s1.ax1x.com/2023/03/23/ppdxAMQ.png"
          alt="Sign up"
          border="0"
        />
      </div>
      <style jsx>{`
        .container {
          width: 1000px;
          margin: 60px 20%;
        }
        .form {
          margin-top: 55px;
          // backgroud:red;
        }
        .text {
          width: 200px;
          //  color: #26628a;
          margin-right: 20px;
        }
        .inputSP {
          height: 35px;
          border: none;
          margin: 5px;
          // border-radius: 10px;
          // background-color:#d8e9f4;
        }
        .btn {
          margin-left: 59%;
          margin-top: 25px;
          width: 150px;
          height: 35px;
          border: none;
          background-color: #4b9cd3;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
        .nd_signin {
          margin-top: 25px;
          // padding-bottom:10px;
          color: #4b9cd3;
          font-size: small;
          cursor: pointer;
        }
        .nd_signin a {
          color: #4b9cd3 !important;
        }
        .nd_signin a:hover {
          color: #26628a;
        }
        .sp_img {
          margin-left: 50px;
          width: 350px;
        }
      `}</style>
    </div>
  );
}
//     <section class="bg-gray-50 dark:bg-gray-900">
//       <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
//           {/* <h1 className="title">Forget Password</h1> */}
//           <h2
//             class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
//             action="#"
//           >
//             Forget Password
//           </h2>
//           <form
//             class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
//             onSubmit={handleSubmit}
//           >
//             <div>
//               <label
//                 for="email"
//                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Your email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="name@company.com"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 for="password"
//                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 placeholder="••••••••"
//                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 for="confirm-password"
//                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Confirm password
//               </label>
//               <input
//                 type="confirm-password"
//                 name="confirm-password"
//                 value={confirmPassword}
//                 onChange={(event) => setConfirmPassword(event.target.value)}
//                 placeholder="••••••••"
//                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 required
//               />
//             </div>

//             {error && <p>{error}</p>}
//             <button
//               type="submit"
//               class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//             >
//               Reset passwod
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
