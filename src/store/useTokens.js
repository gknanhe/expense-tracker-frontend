import { create } from "zustand";

export const useTokenStore = create((set) => ({
  token: null, // Initial token state
  setToken: (newToken) => set((state) => ({ token: newToken })),
}));

export const useIncomeStore = create((set) => ({
  incomes: null,
  setIncomes: (income) => set({ incomes: income }),
}));
