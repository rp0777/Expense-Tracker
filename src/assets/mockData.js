let balance = 5000;
let totalExpenses = 0;

const expenses = [
  {
    title: "Samosa",
    price: "150",
    category: "food",
    date: new Date("2024-03-20"),
  },
  {
    title: "Samosa",
    price: "150",
    category: "food",
    date: new Date("2024-03-20"),
  },
  {
    title: "Samosa",
    price: "150",
    category: "food",
    date: new Date("2024-03-20"),
  },
  {
    title: "Movie",
    price: "300",
    category: "entertainment",
    date: new Date("2024-03-21"),
  },
  {
    title: "Train",
    price: "50",
    category: "travel",
    date: new Date("2024-03-22"),
  },
  {
    title: "Train",
    price: "50",
    category: "travel",
    date: new Date("2024-03-22"),
  },
  {
    title: "Train",
    price: "50",
    category: "travel",
    date: new Date("2024-03-22"),
  },
];

let foodExpense = 0,
  entertainmentExpense = 0,
  travelExpense = 0;
expenses.map((expense) => {
  if (expense.category === "food") foodExpense += parseInt(expense.price);
  if (expense.category === "entertainment")
    entertainmentExpense += parseInt(expense.price);
  if (expense.category === "travel") travelExpense += parseInt(expense.price);
  totalExpenses += parseInt(expense.price);
  balance -= parseInt(expense.price);
});

const categoryData = [
  {
    name: "Food",
    value: foodExpense,
  },
  {
    name: "Entertainment",
    value: entertainmentExpense,
  },
  {
    name: "Travel",
    value: travelExpense,
  },
];

categoryData.sort((a, b) => b.value - a.value);

export { balance, expenses, categoryData, totalExpenses };
