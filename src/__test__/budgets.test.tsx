import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BudgetProvider } from "../hooks/budgetContext";
import Budgets from "../components/budgets/budgets";

const mockRemove = vi.fn();
const mockContacts = [
  {
    id: "1",
    name: "Alice",
    email: "alice@mail.com",
    phone: 123456789,
    total: 300,
    services: [{ campaign: "SEO", page: 2, language: 1, total: 100 }],
  },
  {
    id: "2",
    name: "Bob",
    email: "bob@mail.com",
    phone: 987654321,
    total: 200,
    services: [{ campaign: "Ads", page: 1, language: 1, total: 200 }],
  },
];

vi.mock("../hooks/contactContext", () => ({
  useContact: () => ({
    contacts: mockContacts,
    removeContact: mockRemove,
  }),
}));

vi.mock("../components/search/search", () => ({
  __esModule: true,
  default: ({ onSearch, onSort }: any) => (
    <div>
      <input
        data-testid="search-input"
        placeholder="mock search"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button
        data-testid="sort-name"
        onClick={() => onSort("name", true)}
      >
        Sort by Name
      </button>
      <button
        data-testid="sort-price"
        onClick={() => onSort("price", true)}
      >
        Sort by Price
      </button>
    </div>
  ),
}));

describe("Budgets component", () => {
  it("renders contacts information in the DOM", () => {
    render(
      <BudgetProvider>
        <Budgets />
      </BudgetProvider>
    );

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();

    expect(screen.getByText("SEO")).toBeInTheDocument();
    expect(screen.getByText("Ads")).toBeInTheDocument();

    expect(screen.getByText(/300/i)).toBeInTheDocument();
    expect(screen.getByText(/200/i)).toBeInTheDocument();
  });

  it("filters contacts when searching", async () => {
    render(
      <BudgetProvider>
        <Budgets />
      </BudgetProvider>
    );

    const searchInput = screen.getByTestId("search-input");
    await userEvent.type(searchInput, "Alice");

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });

  it("sorts contacts by name", async () => {
    render(
      <BudgetProvider>
        <Budgets />
      </BudgetProvider>
    );

    const sortButton = screen.getByTestId("sort-name");
    await userEvent.click(sortButton);

    const contactCards = screen.getAllByRole("heading", { level: 4 });
    const names = contactCards.map((el) => el.textContent);
    expect(names).toEqual(["Alice", "Bob"]);
  });

  it("calls removeContact when clicking delete", async () => {
    render(
      <BudgetProvider>
        <Budgets />
      </BudgetProvider>
    );

    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    await userEvent.click(deleteButtons[0]);

    expect(mockRemove).toHaveBeenCalledWith("1");
  });
});