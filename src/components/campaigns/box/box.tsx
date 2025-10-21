import { useState } from 'react'
import type { BoxProps } from "./boxTypes";
import {Count} from './../count/count';
import { useBudget } from "../../budget/budgetContext";

export default function Box({ campaign, description, price }: BoxProps) {
    const [checked, setChecked] = useState(false)
    const [boxTotal, setBoxTotal] = useState(price);
    const { updateTotal } = useBudget();

    const handleChange = () => {
        if (checked) {
        updateTotal(-boxTotal);
        setChecked(false);
        } else {
        updateTotal(price);
        setChecked(true);
        }
    };

    const handleCountChange = (newTotal: number) => {
        const difference = newTotal - boxTotal;
        setBoxTotal(newTotal);
        updateTotal(difference);
    };

    return (
        <>
            <div className="shadow-lg mb-5 rounded-sm">
                <div className="p-5 flex">
                    <div className="flex-1">
                    <h4 className="font-bold mb-2">{campaign}</h4>
                    <p className="text-xs">{description}</p>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                    <p className="text-3xl font-bold text-center">{price}€</p>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                    <input
                        type="checkbox"
                        className="rounded-sm cursor-pointer"
                        checked={checked}
                        onChange={handleChange}
                    />
                    <label className="mx-3">Select</label>
                    </div>
                </div>

                {checked && (
                    <div className="p-5">
                    <Count basePrice={price} onTotalChange={handleCountChange} />
                    </div>
                )}
            </div>
        </>
    )
}