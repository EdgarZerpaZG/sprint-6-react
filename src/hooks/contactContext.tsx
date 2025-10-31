import { createContext, useContext, useState, useEffect } from "react";
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
    try {
      const saved = localStorage.getItem("contacts");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error parsing contacts from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } catch (e) {
      console.error("Error saving contacts to localStorage", e);
    }
  }, [contacts]);

  const addContact = (contact: Contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const removeContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
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