import { dashboard, expenses, transactions, trend } from "../utils/icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    path: "/",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions,
    path: "/view-trasactions",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    path: "/incomes",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    path: "/expenses",
  },
];
