import { balance } from "../../../assets/mockData";
import styles from "./WalletBalance.module.css";

const WalletBalance = () => {
  return (
    <div className={styles.walletBalance}>
      <p>
        Wallet Balance: &nbsp;
        <span className={styles.balanceAmount}>₹{balance}</span>
      </p>

      <button className={styles.addIncome}>+ Add Income</button>
    </div>
  );
};

export default WalletBalance;
