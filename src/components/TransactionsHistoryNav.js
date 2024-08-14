import PropTypes from "prop-types";
import styles from "./TransactionsHistoryNav.module.css";

const TransactionsHistoryNav = ({ className = "" }) => {
  return (
    <div className={[styles.allExpenseParent, className].join(" ")}>
      <button className={styles.allExpense}>
        <a className={styles.allExpense1}>All Expense</a>
      </button>
      <button className={styles.allIncome}>
        <a className={styles.allIncome1}>All Income</a>
      </button>
    </div>
  );
};

TransactionsHistoryNav.propTypes = {
  className: PropTypes.string,
};

export default TransactionsHistoryNav;