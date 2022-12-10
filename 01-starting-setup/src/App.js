import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
