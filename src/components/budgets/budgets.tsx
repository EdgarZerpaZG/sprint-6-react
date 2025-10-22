import { useBudget } from "./../budget/budgetContext"
import { useContact } from "../contact/contactContext";

export default function Budgets() {

    const { total } = useBudget();
    const {name, email, phone} = useContact();

    return (
        <>
            <div className="shadow-lg mb-5 rounded-sm">
                <div className="p-5 block lg:flex justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h4 className="font-bold text-2xl">{name}</h4>
                        <p className="text-xs text-gray-500">{email}</p>
                        <p className="text-xs text-gray-500">{phone}</p>
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                        <p className="font-bold mb-2">Services</p>
                        <u className="list-none text-xs">
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                        </u>
                    </div>
                    <div className="flex-1 text-center">
                        <p className="text-xs text-gray-500">Total</p>
                        <p className="text-3xl font-bold">{total}<span className="text-sm font-light">€</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}