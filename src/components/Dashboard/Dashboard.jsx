import styles from "./Dashboard.module.css";
import Expenses from "./Expenses/Expenses";
import PieChart from "./PieChart/PieChart";
import WalletBalance from "./WalletBalance/WalletBalance";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.walletAndExpenses}>
        <WalletBalance />
        <Expenses />
      </div>

      <PieChart />
    </div>
  );
};

export default Dashboard;
