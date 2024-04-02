// import React, { Children, useState } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:8000/api/";

// const GlobalContext = React.createContext();

// export const GlobalProvider = (children) => {
//   const [incomes, setIncomes] = useState([]);
//   const [expenses, setExpenses] = useState([]);
//   const [error, setError] = useState(null);

//   const addIncome = async (income) => {};

//   return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
// };
// //

import React, { useContext, useState } from "react";
import axios from "axios";
import { useTokenStore } from "../store/useTokens";
import { toast } from "react-hot-toast";

const BASE_URL = "http://localhost:8000/api/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const { token } = useTokenStore();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Example authorization header
  };

  //Income func
  const addIncome = async (income) => {
    console.log(income);
    const response = await axios
      .post(`${BASE_URL}add-income`, income, { headers })
      .then((response) => {
        const data = response.data; // Accessing the data property

        toast.success(data.message);

        console.log("Response:", response.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });

    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios
      .get(`${BASE_URL}get-income`, { headers })
      .then((response) => {
        const data = response.data; // Accessing the data property

        setIncomes(data);

        console.log("Response:", response.data);
      })
      .catch((err) => {
        console.log("error", error);
        setError(err.response.data.message);
        // toast.error(err.response.data.message);
      });
  };

  const deleteIncome = async (id) => {
    console.log("btn delet clicked", id);
    const res = await axios.get(`${BASE_URL}delete-Income?id=${id}`, {
      headers,
    });
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  //expense func
  const addExpense = async (expense) => {
    console.log(expense);
    const response = await axios
      .post(`${BASE_URL}add-expense`, expense, { headers })
      .then((response) => {
        const data = response.data; // Accessing the data property

        toast.success(data.message);

        console.log("Response:", response.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });

    getExpense();
  };

  const getExpense = async () => {
    console.log("token in getExp", token);
    const response = await axios
      .get(`${BASE_URL}get-expense`, { headers })
      .then((response) => {
        const data = response.data; // Accessing the data property

        setExpenses(data);

        console.log("Response:", response.data);
      })
      .catch((err) => {
        console.log("error", error);
        setError(err.response.data.message);
        // toast.error(err.response.data.message);
      });
  };

  const deleteExpense = async (id) => {
    console.log("btn delet clicked", id);
    const res = await axios.get(`${BASE_URL}delete-expense?id=${id}`, {
      headers,
    });
    getExpense();
  };

  const totalExpenses = () => {
    let totalExpenses = 0;
    expenses.forEach((expense) => {
      totalExpenses = totalExpenses + expense.amount;
    });

    return totalExpenses;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncome,
        addExpense,
        getExpense,
        deleteExpense,
        totalExpenses,
        expenses,
        totalBalance,
        transactionHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
