import { balance } from "../../../assets/mockData";
import styles from "./WalletBalance.module.css";

const WalletBalance = () => {
  return (
    <div className={styles.walletBalance}>
      <h3>
        Wallet Balance: &nbsp;
        <span className={styles.balanceAmount}>₹{balance}</span>
      </h3>

      <button className={styles.addIncome}>+ Add Income</button>
    </div>
  );
};

export default WalletBalance;
