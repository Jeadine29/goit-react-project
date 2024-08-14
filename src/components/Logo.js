import PropTypes from "prop-types";
import styles from "./Logo.module.css";

const Logo = ({ className = "" }) => {
  return (
    <div className={[styles.logo, className].join(" ")}>
      <img className={styles.icon} alt="" src="/icon1.svg" />
      <b className={styles.expensetracker}>ExpenseTracker</b>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
