import { useState, useEffect } from "react";
import type { BoxProps } from "./boxTypes";
import { Count } from "./../count/count";
import { useBudget } from "../../budget/budgetContext";

export default function Box({ campaign, id, description, price }: BoxProps) {
  const [checked, setChecked] = useState(false);
  const [boxTotal, setBoxTotal] = useState(price);
  const { updateTotal, addService, removeService, shouldReset } = useBudget();

  const handleChange = () => {
    if (checked) {
      updateTotal(-boxTotal);
      removeService(campaign);
      setChecked(false);
    } else {
      updateTotal(price);
      addService({ campaign, description, price, total: price, page: 0, language: 0 });
      setChecked(true);
    }
  };

  const handleCountChange = (data: { total: number; page: number; language: number }) => {
  const { total, page, language } = data;
  const difference = total - boxTotal;
  setBoxTotal(total);
  updateTotal(difference);

  addService({ campaign, description, price, total, page, language });
};

  useEffect(() => {
    if (!checked) {
      setBoxTotal(price);
    }
  }, [checked]);

  useEffect(() => {
    if (shouldReset) {
      setChecked(false);
      setBoxTotal(price);
    }
  }, [shouldReset]);

  return (
    <div className="shadow-lg mb-5 rounded-sm" id={id}>
      <div className="p-5 block lg:flex">
        <div className="flex-1 text-center lg:text-left mb-5 lg:mb-0">
          <h4 className="font-bold mb-2">{campaign}</h4>
          <p className="text-xs">{description}</p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <p className="text-3xl font-bold text-center">
            {price}
            <span className="text-sm font-light">€</span>
          </p>
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
          <Count price={price} onChange={handleCountChange} />
        </div>
      )}
    </div>
  );
}