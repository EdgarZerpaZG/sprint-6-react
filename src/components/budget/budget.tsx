import { useBudget } from "./budgetContext";

export default function Budget() {
  
  const { total } = useBudget();

  return (
    <div className="text-center lg:text-right mt-10">
      <h4 className="font-bold text-3xl inline-block p-3 shadow-lg">Total Budget: {total} €</h4>
    </div>
  );
}