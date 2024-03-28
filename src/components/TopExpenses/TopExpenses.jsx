import { categoryData } from "../../assets/mockData";
import styles from "./TopExpenses.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TopExpenses = () => {
  return (
    <div className={styles.topExpenses}>
      <p className={styles.heading}>
        <i>Top Expenses</i>
      </p>

      <div className={styles.categories}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={categoryData}
            margin={{
              top: 20,
              right: 30,
              left: 40,
              bottom: 5,
            }}
            layout="vertical"
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="value" barSize={25} fill="#8784d2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopExpenses;
