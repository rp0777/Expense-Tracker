import CategoryPieChart from "./CategoryPieChart/CategoryPieChart";
import styles from "./Dashboard.module.css";
import Expenses from "./Expenses/Expenses";
import WalletBalance from "./WalletBalance/WalletBalance";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.walletAndExpenses}>
        <WalletBalance />
        <Expenses />
      </div>

      <CategoryPieChart />
    </div>
  );
};

export default Dashboard;
