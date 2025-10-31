import { useParams } from "react-router-dom";
import { useContact } from "../hooks/contactContext";
import Title from '../components/title/title';
import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

export default function Details() {
    const { id } = useParams();
    const { contacts } = useContact();
    const [copied, setCopied] = useState(false);

    const contact = contacts.find((c) => c.id === id);

    const handleCopyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!contact) {
        return (
            <main className="flex justify-center items-center h-screen">
                <section>
                <Title style="text-center text-3xl font-bold underline pb-5" title="Budget details" />
                <p className="text-center text-gray-500 mt-5">This budget does not exist.</p>
                </section>
            </main>
        );
    }

    return (
        <>
            <main className="flex justify-center items-center h-screen">
                <section className="shadow-lg rounded-sm p-10 max-w-2xl">
                    <Title style="text-center text-3xl font-bold underline pb-5" title="Budget details" />
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={handleCopyLink}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-all cursor-pointer"
                        >
                            {copied ? <Check size={16} /> : <Clipboard size={16} />}
                            {copied ? "Copied!" : "Share"}
                        </button>
                    </div>
                    <div className="mb-5 text-center">
                        <h4 className="font-bold text-2xl">{contact.name}</h4>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                        <p className="text-sm text-gray-600">{contact.phone}</p>
                    </div>
                    <hr className="my-5" />
                    <div>
                        <h5 className="font-bold mb-3 text-center">Selected Services</h5>
                        <ul className="text-sm space-y-3">
                            {contact.services.map((service, index) => (
                            <li key={index} className="border-b pb-2">
                                <strong>{service.campaign}</strong>
                                {service.page > 0 && <span className="block text-gray-500">Pages: {service.page}</span>}
                                {service.language > 0 && <span className="block text-gray-500">Languages: {service.language}</span>}
                                <span className="block text-gray-700 font-semibold">Total: {service.total}€</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-xl font-bold">Total: {contact.total} €</p>
                    </div>
                </section>
            </main>
        </>
    )
}