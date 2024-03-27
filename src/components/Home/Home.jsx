import Dashboard from "../Dashboard/Dashboard";
import TopExpenses from "../TopExpenses/TopExpenses";
import Transactions from "../Transactions/Transactions";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.appHeading}>Expense Tracker</h1>

      {/* Dashboard Component */}
      <Dashboard />

      <div className={styles.transactionsAndExpenses}>
        <Transactions />
        <TopExpenses />
      </div>
    </div>
  );
};

export default Home;
