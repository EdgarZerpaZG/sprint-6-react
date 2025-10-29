import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type PaymentContextType = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
};
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [toggle, setToggle] = useState(false);

  return (
    <PaymentContext.Provider value={{ toggle, setToggle }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
}