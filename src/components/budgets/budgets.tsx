import { useContact } from "../contact/contactContext";

export default function Budgets() {
  const { contacts, removeContact } = useContact();

  if (contacts.length === 0) {
    return <p className="text-center text-gray-500 mt-5">No quotes yet.</p>;
  }
  return (
    <div className="mt-10 space-y-5">
      {contacts.map((context, index) => (
        <div key={index} className="shadow-lg rounded-sm p-5 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h4 className="font-bold text-2xl">{context.name}</h4>
              <p className="text-xs text-gray-500">{context.email}</p>
              <p className="text-xs text-gray-500">{context.phone}</p>
            </div>
            <div className="flex-1">
              <p className="font-bold mb-2">Selected Services</p>
              <ul className="text-xs">
                  {context.services?.length ? (
                      context.services.map((service, i) => (
                      <li className="mb-5 list-disc" key={i}>
                          <strong>{service.campaign}</strong> - {service.page ? `Pages: ${service.page} - ` : ''} {service.language ? `Languages: ${service.language}` : ''}
                          <span className="font-semibold block"> Subtotal: {service.total}€</span>
                      </li>
                      ))) : (<li>No services selected</li>)}
              </ul>
            </div>
            <div className="flex-1 text-right">
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-3xl font-bold">
                {context.total} <span className="text-sm font-light">€</span>
              </p>
            </div>
          </div>
          <div className="text-right">
            <button onClick={() => removeContact(index)} className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}