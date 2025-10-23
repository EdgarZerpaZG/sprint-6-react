import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { SelectedService } from "../budget/budgetContext";

export type Contact = {
  name: string;
  email: string;
  phone: number;
  total: number;
  services: SelectedService[];
};

type ContactContextType = {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  removeContact: (index: number) => void; // ✅ nuevo método
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const addContact = (contact: Contact) => {
    setContacts((prev) => {
      const updated = [...prev, contact];
      localStorage.setItem("contacts", JSON.stringify(updated));
      return updated;
    });
  };

  const removeContact = (index: number) => {
    setContacts((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      localStorage.setItem("contacts", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, removeContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) throw new Error("useContact must be used within a ContactProvider");
  return context;
}