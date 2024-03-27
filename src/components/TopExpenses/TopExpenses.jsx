import styles from "./TopExpenses.module.css";

const TopExpenses = () => {
  return (
    <div className={styles.topExpenses}>
      <p className={styles.heading}>
        <i>Top Expenses</i>
      </p>

      <div className={styles.categories}>Expenses Categories Bar Chart</div>
    </div>
  );
};

export default TopExpenses;
