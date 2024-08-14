import TotalIncome from "./TotalIncome";
import PropTypes from "prop-types";
import styles from "./TransactionsTotalAmount.module.css";

const TransactionsTotalAmount = ({ className = "" }) => {
  return (
    <div className={[styles.totalIncomeParent, className].join(" ")}>
      <TotalIncome arrow15="/arrow-15.svg" totalIncome="Total Income" />
      <TotalIncome
        arrow15="/arrow-14.svg"
        totalIncome="Total Expense"
        propTop="unset"
        propBottom="13.4px"
        propMinWidth="unset"
        propWidth="104px"
      />
    </div>
  );
};

TransactionsTotalAmount.propTypes = {
  className: PropTypes.string,
};

export default TransactionsTotalAmount;
