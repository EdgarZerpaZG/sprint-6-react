import { useBudget } from "./budgetContext";

export default function Budget() {
  const { total } = useBudget();

  return (
    <div className="text-right mt-10">
      <h4 className="font-bold text-3xl">Total Budget: {total} €</h4>
    </div>
  );
}
