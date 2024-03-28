import { useState } from "react";
import { expenses } from "../../assets/mockData";
import ExpenseCard from "./ExpenseCard/ExpenseCard";
import styles from "./Transactions.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginateExpenses = (page, elementsPerPage) => {
    const startIndex = (page - 1) * elementsPerPage;
    const endIndex = Math.min(startIndex + elementsPerPage, expenses.length);
    return expenses.slice(startIndex, endIndex);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(expenses.length / elementsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const elementsPerPage = 3;
  const currentExpenses = paginateExpenses(currentPage, elementsPerPage);

  return (
    <div className={styles.transactions}>
      <p className={styles.heading}>
        <i>Recent Transactions</i>
      </p>

      <div className={styles.cardsFrame}>
        {currentExpenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}

        <div className={styles.pagination}>
          <button className={styles.pageBtns} onClick={goToPreviousPage}>
            <BsArrowLeft size={16} />
          </button>
          <p className={styles.pageNumber}>{currentPage}</p>
          <button className={styles.pageBtns} onClick={goToNextPage}>
            <BsArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
