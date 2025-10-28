import { vi, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactProvider } from "../components/contact/contactContext";
import Contact from "../components/contact/contact";

vi.mock("../components/budget/budgetContext", () => ({
  useBudget: () => ({
    total: 100,
    services: [{ campaign: "SEO", total: 100, page: 1, language: 1 }],
    resetBudget: vi.fn(),
  }),
}));

describe("Contact validation", () => {
  it("shows errors for invalid data", async () => {
    render(
      <ContactProvider>
        <Contact />
      </ContactProvider>
    );

    const nameInput = screen.getByPlaceholderText(/name/i);
    const phoneInput = screen.getByPlaceholderText(/phone/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const button = screen.getByRole("button", { name: /request/i });

    await userEvent.type(nameInput, "x");
    await userEvent.type(phoneInput, "invalid-phone");
    await userEvent.type(emailInput, "invalid-email");
    await userEvent.click(button);

    expect(await screen.findByText(/at least 2 characters/i)).toBeInTheDocument();
    expect(await screen.findByText(/invalid phone number/i)).toBeInTheDocument();
    expect(await screen.findByText(/invalid email address/i)).toBeInTheDocument();
  });

  it("submits correctly with valid data", async () => {
    render(
      <ContactProvider>
        <Contact />
      </ContactProvider>
    );

    const nameInput = screen.getByPlaceholderText(/name/i);
    const phoneInput = screen.getByPlaceholderText(/phone/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const button = screen.getByRole("button", { name: /request/i });

    await userEvent.type(nameInput, "Usuario Correcto");
    await userEvent.type(phoneInput, "123456789");
    await userEvent.type(emailInput, "usuario@dominio.com");
    await userEvent.click(button);

    expect(screen.queryByText(/invalid name/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/invalid phone/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();
  });
});