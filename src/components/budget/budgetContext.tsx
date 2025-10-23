import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type SelectedService = {
  campaign: string;
  description: string;
  price: number;
  total: number;
  page: number;
  language: number;
};

type BudgetContextType = {
  total: number;
  services: SelectedService[];
  updateTotal: (amount: number) => void;
  addService: (service: SelectedService) => void;
  updateService: (service: SelectedService) => void;
  removeService: (campaign: string) => void;
  resetBudget: () => void;
};

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [total, setTotal] = useState(0);
  const [services, setServices] = useState<SelectedService[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("budgetData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTotal(parsed.total || 0);
      setServices(parsed.services || []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("budgetData", JSON.stringify({ total, services }));
  }, [total, services]);

  const updateTotal = (amount: number) => {
    setTotal((prev) => Math.max(prev + amount, 0));
  };

  const addService = (service: SelectedService) => {
    setServices((prev) => {
      const exists = prev.find((s) => s.campaign === service.campaign);
      if (exists) return prev;
      return [...prev, service];
    });
  };

  const updateService = (service: SelectedService) => {
    setServices((prev) =>
      prev.map((s) => (s.campaign === service.campaign ? service : s))
    );
  };
  const removeService = (campaign: string) => {
    setServices((prev) => {
      const found = prev.find((s) => s.campaign === campaign);
      if (found) {
        setTotal((t) => Math.max(t - found.total, 0));
      }
      return prev.filter((s) => s.campaign !== campaign);
    });
  };

  const resetBudget = () => {
    setTotal(0);
    setServices([]);
    localStorage.removeItem("budgetData");
  };

  return (
    <BudgetContext.Provider value={{total, services, updateTotal, addService, updateService, removeService, resetBudget}}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  }
  return context;
}