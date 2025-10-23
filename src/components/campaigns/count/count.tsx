import { useState, useEffect } from "react";

type CountProps = {
  price: number;
  onChange: (data: { total: number; page: number; language: number }) => void;
};

export function Count({ price, onChange }: CountProps) {
  const [page, setPage] = useState(0);
  const [language, setLanguage] = useState(0);

  useEffect(() => {
    const total = price + (page + language) * 30;
    onChange({ total, page, language });
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