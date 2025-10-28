import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: number;
  total: number;
  services: {
    campaign: string;
    total: number;
    page: number;
    language: number;
  }[];
};

type ContactContextType = {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  removeContact: (id: string) => void;
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

  const removeContact = (id: string) => {
    setContacts((prev) => {
      const updated = prev.filter((c) => c.id !== id);
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