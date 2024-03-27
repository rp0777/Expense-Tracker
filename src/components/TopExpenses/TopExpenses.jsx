import styles from "./TopExpenses.module.css";

const TopExpenses = () => {
  return (
    <div className={styles.topExpenses}>
      <h2 className={styles.heading}>
        <i>Top Expenses</i>
      </h2>

      <div className={styles.categories}>Expenses Categories Bar Chart</div>
    </div>
  );
};

export default TopExpenses;
