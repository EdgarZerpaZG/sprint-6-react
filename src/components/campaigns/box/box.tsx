import { useState } from 'react'
import type { BoxProps } from "./boxTypes";
import Count from './../count/count'

export default function Box({ campaign, description, price }: BoxProps) {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
    setChecked(!checked);
  }
	const hidden = checked ? '' : 'hidden';

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
                        <form>
                            <input type="checkbox" className="rounded-sm cursor-pointer" value="Select" checked={ checked } onChange={ handleChange } />
                            <label className="mx-3">Select</label>
                        </form>
                    </div>
                </div>
                <div className={`p-5 ${hidden}`}>
                    <Count />
                </div>
            </div>
        </>
    )
}