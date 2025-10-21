import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type BudgetContextType = {
  total: number;
  updateTotal: (amount: number) => void;
};

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [total, setTotal] = useState(0);

  const updateTotal = (amount: number) => {
    setTotal((prev) => Math.max(prev + amount, 0));
  };

  return (
    <BudgetContext.Provider value={{ total, updateTotal }}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget debe usarse dentro de un BudgetProvider");
  }
  return context;
}