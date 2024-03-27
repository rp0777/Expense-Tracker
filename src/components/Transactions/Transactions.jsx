import styles from "./Transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.transactions}>
      <h2 className={styles.heading}>
        <i>Recent Transactions</i>
      </h2>

      <div className={styles.cardsFrame}>Expenses Cards</div>
    </div>
  );
};

export default Transactions;
