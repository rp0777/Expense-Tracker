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
];

let foodCount = 0,
  entertainmentCount = 0,
  traveLCount = 0;
expenses.map((expense) => {
  if (expense.category === "food") foodCount++;
  if (expense.category === "entertainment") entertainmentCount++;
  if (expense.category === "travel") traveLCount++;
  totalExpenses += parseInt(expense.price);
  balance -= parseInt(expense.price);
});

const categoryData = {
  food: foodCount,
  entertainment: entertainmentCount,
  travel: traveLCount,
};

export { balance, expenses, categoryData, totalExpenses };
