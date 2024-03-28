import styles from "./ExpenseCard.module.css";
import { CiCircleRemove } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";
import ExpenseModal from "../../Dashboard/ExpenseModal/ExpenseModal";
import { useState } from "react";
// import PropTypes from "prop-types";

// ExpenseCard.propTypes = {
//   expense: PropTypes.node,
// };

const ExpenseCard = ({ expense }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const dateFormat = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[month]} ${day}, ${year}`;
  };

  const categoryPics = {
    food: "/Pizza_light.png",
    entertainment: "/Gift_light.png",
    travel: "/suitcase_light.png",
  };

  return (
    <div className={styles.expenseCard}>
      <div className={styles.iconAndTitle}>
        <img
          className={styles.categoryIcon}
          src={categoryPics[expense.category]}
          alt={`${expense.category} icon`}
        />

        <div className={styles.titleAndDate}>
          <p className={styles.title}>{expense.title}</p>

          <p className={styles.date}>{dateFormat(expense.date)}</p>
        </div>
      </div>

      <div className={styles.priceAndUpdate}>
        <p className={styles.price}>₹{expense.price}</p>

        <button className={styles.deleteBtn}>
          <CiCircleRemove size={25} />
        </button>

        <button className={styles.editBtn} onClick={openModal}>
          <MdModeEdit size={30} />
        </button>
      </div>

      {isOpen && (
        <ExpenseModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          type={"Edit"}
          id={expense.id}
        />
      )}
    </div>
  );
};

export default ExpenseCard;
