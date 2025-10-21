import { useState, useEffect } from "react";

type CountProps = {
  basePrice: number;
  onTotalChange: (total: number) => void;
};

export function Count({ basePrice, onTotalChange }: CountProps) {
  const [page, setPage] = useState(0);
  const [language, setLanguage] = useState(0);

  useEffect(() => {
    const newTotal = basePrice + (page + language) * 30;
    onTotalChange(newTotal);
  }, [page, language]);

  return (
    <>
      <div className="flex justify-end mb-3 items-center">
        <p className="pe-2">Page number:</p>
        <button className="px-2 border rounded" onClick={() => setPage(Math.max(page - 1, 0))}>-</button>
        <span className="px-5 mx-2">{page}</span>
        <button className="px-2 border rounded" onClick={() => setPage(page + 1)}>+</button>
      </div>

      <div className="flex justify-end items-center">
        <p className="pe-2">Language number:</p>
        <button className="px-2 border rounded" onClick={() => setLanguage(Math.max(language - 1, 0))}>-</button>
        <span className="px-5 mx-2">{language}</span>
        <button className="px-2 border rounded" onClick={() => setLanguage(language + 1)}>+</button>
      </div>
    </>
  );
}