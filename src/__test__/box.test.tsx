import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BudgetProvider } from "../hooks/budgetContext";
import { PaymentProvider } from "../components/payment/paymentContext";
import Box from './../components/campaigns/box/box';

describe('Box component', () => {
    it('should be checked', async () => {
        const user = userEvent.setup();
        render(
            <PaymentProvider>
                <BudgetProvider>
                    <Box campaign="SEO" id="1" description="Test Campaign" price={100} />
                </BudgetProvider>
            </PaymentProvider>
        )
        const checkbox = screen.getByRole('checkbox');
        await user.click(checkbox);
        expect(checkbox).toBeChecked();
    })
})