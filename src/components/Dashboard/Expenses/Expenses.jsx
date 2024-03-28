import { useState } from "react";
import { expenses, totalExpenses } from "../../../assets/mockData";
import styles from "./Expenses.module.css";
import ExpenseModal from "../ExpenseModal/ExpenseModal";

const Expenses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className={styles.expenses}>
      <p>
        Expenses: &nbsp;
        <span className={styles.totalExpensesAmount}>₹{totalExpenses}</span>
      </p>

      <button className={styles.addExpense} onClick={openModal}>
        + Add Expense
      </button>

      {isOpen && (
        <ExpenseModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          type={"Add"}
          id={expenses.length}
        />
      )}
    </div>
  );
};

export default Expenses;
