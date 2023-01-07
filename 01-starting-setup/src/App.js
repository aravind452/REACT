import Expenses from "./Components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

const dummy_expenses = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 2, title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: 3,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 4,
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 className="app">Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
