import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BudgetProvider } from "./hooks/budgetContext.tsx";
import { ContactProvider } from './hooks/contactContext.tsx';
import { PaymentProvider } from './components/payment/paymentContext.tsx';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BudgetProvider>
      <ContactProvider>
        <PaymentProvider>
          <App />
        </PaymentProvider>
      </ContactProvider>
    </BudgetProvider>
  </StrictMode>
)
