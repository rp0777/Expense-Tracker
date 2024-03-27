import { totalExpenses } from "../../../assets/mockData";
import styles from "./Expenses.module.css";

const Expenses = () => {
  return (
    <div className={styles.expenses}>
      <h3>
        Expenses: &nbsp;
        <span className={styles.totalExpensesAmount}>₹{totalExpenses}</span>
      </h3>

      <button className={styles.addExpense}>+ Add Expense</button>
    </div>
  );
};

export default Expenses;
