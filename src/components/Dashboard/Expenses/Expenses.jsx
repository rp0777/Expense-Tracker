import { totalExpenses } from "../../../assets/mockData";
import styles from "./Expenses.module.css";

const Expenses = () => {
  return (
    <div className={styles.expenses}>
      <p>
        Expenses: &nbsp;
        <span className={styles.totalExpensesAmount}>₹{totalExpenses}</span>
      </p>

      <button className={styles.addExpense}>+ Add Expense</button>
    </div>
  );
};

export default Expenses;
