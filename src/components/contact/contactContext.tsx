import { createContext, useContext } from "react";
import type { ReactNode } from "react";

type ContactContextType = {
    name: string,
    email: string,
    phone: number,
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {

    return (
        <ContactContext.Provider value={{ name: 'Edgar', email: 'edgarzerpa@gmail.com', phone: 123456789 }}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContact() {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error("useContact most be used within a ContactProvider");
    }
    return context;
}