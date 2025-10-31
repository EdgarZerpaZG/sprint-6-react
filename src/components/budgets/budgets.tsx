import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useContact } from "../../hooks/contactContext";
import Search from "../search/search";
import { ExternalLink } from "lucide-react";

export default function Budgets() {
  const { contacts, removeContact } = useContact();
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState<"name" | "campaign" | "price" | "">("");
  const [ascending, setAscending] = useState(true);

  const handleSearch = (value: string) => setQuery(value);
  const handleSort = (type: "name" | "campaign" | "price" | "", asc: boolean) => {
    setSortType(type);
    setAscending(asc);
  };

  const filteredContacts = useMemo(() => {
    let results = contacts.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.services.some((s) => s.campaign.toLowerCase().includes(query.toLowerCase()))
    );

    if (sortType === "name") {
      results.sort((a, b) =>
        ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      );
    } else if (sortType === "campaign") {
      results.sort((a, b) => {
        const campA = a.services[0]?.campaign || "";
        const campB = b.services[0]?.campaign || "";
        return ascending ? campA.localeCompare(campB) : campB.localeCompare(campA);
      });
    } else if (sortType === "price") {
      results.sort((a, b) =>
        ascending ? a.total - b.total : b.total - a.total
      );
    }

    return results;
  }, [contacts, query, sortType, ascending]);

  return (
    <>
      <div className="mt-10 space-y-5">
        <Search onSearch={handleSearch} onSort={handleSort} />

        {filteredContacts.length === 0 ? (
          <p className="text-center text-gray-500 mt-5">No quotes yet.</p>
        ) : (
          <div className="mt-10 space-y-5">
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="shadow-lg rounded-sm p-5 flex flex-col gap-3">
                <div className="text-right">
                  <Link className="m-0 text-black hover:text-gray-500" to="/details">
                    <ExternalLink className="inline-block mr-2" size={16} />
                  </Link>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h4 className="font-bold text-2xl">{contact.name}</h4>
                    <p className="text-xs text-gray-500">{contact.email}</p>
                    <p className="text-xs text-gray-500">{contact.phone}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold mb-2">Selected Services</p>
                    <ul className="text-xs">
                      {contact.services?.length ? (
                        contact.services.map((service, i) => (
                          <li className="mb-5" key={i}>
                            <strong>{service.campaign}</strong>
                            {service.page > 0 && <span className="block"> — Pages: {service.page}</span>}
                            {service.language > 0 && <span className="block"> — Languages: {service.language}</span>}
                          </li>
                        ))
                      ) : (
                        <li>No services selected</li>
                      )}
                    </ul>
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="text-3xl font-bold">
                      {contact.total} <span className="text-sm font-light">€</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <button onClick={() => removeContact(contact.id)} className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded cursor-pointer text-sm">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}