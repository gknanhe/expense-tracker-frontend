import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useTokenStore } from "../store/useTokens";
import { useIncomeStore } from "../store/useTokens";

const useIncome = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useTokenStore();
  const { setIncomes } = useIncomeStore();

  useEffect(() => {
    const fetchIncomeData = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/api/get-income", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setIncomes(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIncomeData(); // Call the async function immediately
  }, [token, setIncomes]); // Add dependencies to the dependency array

  return { loading };
};

export default useIncome;
