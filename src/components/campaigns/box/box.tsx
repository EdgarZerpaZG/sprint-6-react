import { useState, useEffect } from "react";
import type { BoxProps } from "./boxTypes";
import { Count } from "./../count/count";
import { useBudget } from "../../budget/budgetContext";
import { usePayment } from '../../payment/paymentContext'

export default function Box({ campaign, id, description, price }: BoxProps) {
  const [checked, setChecked] = useState(false);
  const [boxTotal, setBoxTotal] = useState(price);
  const { updateTotal, addService, removeService, shouldReset } = useBudget();
  const { toggle } = usePayment();

   useEffect(() => {
    const discountedPrice = toggle ? price * 0.8 : price;
    setBoxTotal(discountedPrice);

    if (checked) {
      addService({
        campaign,
        description,
        price: discountedPrice,
        total: discountedPrice,
        page: 0,
        language: 0,
      });
    }
  }, [toggle]);

  const handleChange = () => {
    if (checked) {
      updateTotal(-boxTotal);
      removeService(campaign);
      setChecked(false);
    } else {
      updateTotal(boxTotal);
      addService({ 
        campaign, 
        description, 
        price: boxTotal, 
        total: boxTotal, 
        page: 0, 
        language: 0 
      });
      setChecked(true);
    }
  };

  const handleCountChange = (data: { total: number; page: number; language: number }) => {
  const { total, page, language } = data;
  const difference = total - boxTotal;
  setBoxTotal(total);
  updateTotal(difference);

  addService({ 
      campaign, 
      description, 
      price: boxTotal, 
      total, 
      page, 
      language 
    });
  };

  useEffect(() => {
    if (!checked) {
      setBoxTotal(toggle ? price * 0.8 : price);
    }
  }, [checked]);

  useEffect(() => {
    if (shouldReset) {
      setChecked(false);
      setBoxTotal(toggle ? price * 0.8 : price);
    }
  }, [shouldReset]);

  return (
    <div className="shadow-lg mb-5 rounded-sm" id={id}>
      <div className="p-5 block lg:flex">
        <div className="flex-1 text-center lg:text-left mb-5 lg:mb-0">
          <h4 className="font-bold mb-2">{campaign}</h4>
          <p className="text-xs">{description}</p>
        </div>
        <div className="flex-1 justify-center items-center">
          {toggle && 
            <p className="text-red-500 text-sm text-center mb-1">20% Discount</p>
          }
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
          <Count price={boxTotal} onChange={handleCountChange} />
        </div>
      )}
    </div>
  );
}