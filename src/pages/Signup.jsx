// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import useSignup from "../hooks/useSignup";
// import { styled } from "styled-components";
// const Signup = () => {
//   const [inputs, setInputs] = useState({
//     fullName: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//   });

//   //hook for input error and signup
//   const { loading, signup } = useSignup();

//   //   const handleCheckBoxChange = (gender) => {
//   //     setInputs({ ...inputs, gender });
//   //   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await signup(inputs);
//   };

//   //   return (
//   //     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//   //       <div
//   //         className="h-full  w-full bg-brown-900 rounded-lg bg-clip-padding backdrop-filter
//   //      backdrop-blur-lg bg-opacity-10 border border-gray-600"
//   //       >
//   //         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#191919] dark:border-gray-700">
//   //           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//   //             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//   //               Sign in to your account
//   //             </h1>
//   //             <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//   //               <div>
//   //                 <label
//   //                   htmlFor="name"
//   //                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//   //                 >
//   //                   Full Name
//   //                 </label>
//   //                 <input
//   //                   type="text"
//   //                   name="name"
//   //                   id="name"
//   //                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//   //                   placeholder="full name"
//   //                   required=""
//   //                   value={inputs.fullName}
//   //                   onChange={(e) =>
//   //                     setInputs({ ...inputs, fullName: e.target.value })
//   //                   }
//   //                 />
//   //               </div>
//   //               <div>
//   //                 <label
//   //                   htmlFor="username"
//   //                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//   //                 >
//   //                   Username
//   //                 </label>
//   //                 <input
//   //                   type="text"
//   //                   name="username"
//   //                   id="username"
//   //                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//   //                   placeholder="username"
//   //                   required=""
//   //                   value={inputs.username}
//   //                   onChange={(e) =>
//   //                     setInputs({ ...inputs, username: e.target.value })
//   //                   }
//   //                 />
//   //               </div>
//   //               <div>
//   //                 <label
//   //                   htmlFor="password"
//   //                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//   //                 >
//   //                   Password
//   //                 </label>
//   //                 <input
//   //                   type="password"
//   //                   name="password"
//   //                   id="password"
//   //                   placeholder="••••••••"
//   //                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//   //                   required=""
//   //                   value={inputs.password}
//   //                   onChange={(e) =>
//   //                     setInputs({ ...inputs, password: e.target.value })
//   //                   }
//   //                 />
//   //               </div>
//   //               <div>
//   //                 <label
//   //                   htmlFor="confirmPassword"
//   //                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//   //                 >
//   //                   Confirm Password
//   //                 </label>
//   //                 <input
//   //                   type="password"
//   //                   name="password"
//   //                   id="confirmPassword"
//   //                   placeholder="••••••••"
//   //                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//   //                   required=""
//   //                   value={inputs.confirmPassword}
//   //                   onChange={(e) =>
//   //                     setInputs({ ...inputs, confirmPassword: e.target.value })
//   //                   }
//   //                 />
//   //               </div>

//   //               {/* //Gender Checkbox  */}

//   //               <button
//   //                 type="submit"
//   //                 className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//   //                 disabled={loading}
//   //               >
//   //                 {loading ? (
//   //                   <span className="loading loading-spinner"></span>
//   //                 ) : (
//   //                   " Sign up"
//   //                 )}
//   //               </button>

//   //               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//   //                 Have an account?{" "}
//   //                 <Link
//   //                   to="/login"
//   //                   className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//   //                 >
//   //                   Sign in
//   //                 </Link>
//   //               </p>
//   //             </form>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );

//   return <h1>Input</h1>;
// };

// export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useSignup from "../hooks/useSignup";

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setfullName] = useState("");
  const { loading, signup } = useSignup();

  const inputs = { username, fullName, password, confirmPassword };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await signup(inputs);
    // console.log(name, password, confirmPassword, username);
    // TODO: Submit the login form to the backend
  };

  return (
    <SignupForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        value={fullName}
        required
        onChange={(event) => setfullName(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Username"
        value={username}
        required
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        required
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <Button type="submit">Sign Up</Button>
      <span>
        Dont have account?{" "}
        <Link
          to="/signin
        "
        >
          Sign in
        </Link>{" "}
      </span>
    </SignupForm>
  );
};

export default Signup;
