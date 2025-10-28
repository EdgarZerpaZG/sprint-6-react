import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

type SortType = "name" | "campaign" | "price" | "";

type SearchProps = {
  onSearch: (query: string) => void;
  onSort: (type: SortType, ascending: boolean) => void;
};

export default function Search({ onSearch, onSort }: SearchProps) {
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState<SortType>("");
  const [ascending, setAscending] = useState(true);

  const handleSortChange = (newSort: SortType) => {
    if (sortType === newSort) {
      const newOrder = !ascending;
      setAscending(newOrder);
      onSort(newSort, newOrder);
    } else {
      setSortType(newSort);
      setAscending(true);
      onSort(newSort, true);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 my-5">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          onSearch(value);
        }}
        placeholder="Search by name or campaign..."
        className="border p-2 rounded-md flex-1"
      />

      <div className="flex items-center gap-2">
        <select
          value={sortType}
          onChange={(e) => handleSortChange(e.target.value as SortType)}
          className="border p-2 rounded-md"
        >
          <option value="">Sort by...</option>
          <option value="name">Name</option>
          <option value="campaign">Campaign</option>
          <option value="price">Price</option>
        </select>

        {sortType && (
          <button
            onClick={() => handleSortChange(sortType)}
            className="border rounded-md p-2 hover:bg-gray-100"
            title={ascending ? "Ascending" : "Descending"}
          >
            <ArrowUpDown
              size={18}
              className={`transition-transform ${
                ascending ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
}
