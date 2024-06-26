import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
// import { useAuthContext } from "../contex/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({ fullName, username, password, confirmPassword }) => {
    console.log(fullName, password, username, confirmPassword);
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
    });

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://expense-tracker-backend-3kpo.onrender.com/api/users/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            username,
            password,
            confirmPassword,
          }),
        }
      );

      const data = await res.json();

      //if error throw error
      if (data.error) {
        throw new Error(data.error);
      }

      //set user to local storage

      localStorage.setItem("chat-user", JSON.stringify(data));
      localStorage.setItem("jwt", data.token);

      setAuthUser(data);

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

//handle input error
function handleInputErrors({ fullName, username, password, confirmPassword }) {
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
