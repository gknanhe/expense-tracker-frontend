import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
// import { useAuthContext } from "../contex/AuthContext";
import { useTokenStore } from "../store/useTokens";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const { setToken } = useTokenStore();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://expense-tracker-backend-3kpo.onrender.com/api/users/logout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      toast.success(data.message);

      localStorage.removeItem("finance-user");
      localStorage.removeItem("finance-token");

      setToken(null);

      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
