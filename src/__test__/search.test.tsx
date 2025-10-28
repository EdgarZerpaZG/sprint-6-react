import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../components/search/search";

describe("Search component", () => {
  it("calls onSearch with user input", async () => {
    const onSearch = vi.fn();
    const onSort = vi.fn();

    render(<Search onSearch={onSearch} onSort={onSort} />);

    const searchInput = screen.getByPlaceholderText(/search by name or campaign/i);
    await userEvent.type(searchInput, "test");

    expect(onSearch).toHaveBeenCalled();
    expect(onSearch).toHaveBeenLastCalledWith("test");
  });

  it("calls onSort with correct parameters when selecting a sort type", async () => {
    const onSearch = vi.fn();
    const onSort = vi.fn();

    render(<Search onSearch={onSearch} onSort={onSort} />);

    const select = screen.getByRole("combobox");

    await userEvent.selectOptions(select, "name");
    expect(onSort).toHaveBeenCalledWith("name", true);

    await userEvent.selectOptions(select, "price");
    expect(onSort).toHaveBeenLastCalledWith("price", true);
  });

  it("toggles ascending/descending order when clicking the sort button", async () => {
    const onSearch = vi.fn();
    const onSort = vi.fn();

    render(<Search onSearch={onSearch} onSort={onSort} />);

    const select = screen.getByRole("combobox");

    await userEvent.selectOptions(select, "name");
    const toggleButton = screen.getByRole("button");

    await userEvent.click(toggleButton);
    expect(onSort).toHaveBeenLastCalledWith("name", false);

    await userEvent.click(toggleButton);
    expect(onSort).toHaveBeenLastCalledWith("name", true);
  });
});