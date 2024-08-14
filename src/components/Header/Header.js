import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.sidebarItem}>
        <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
      </div>
      <a className={styles.expensetracker}>ExpenseTracker</a>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
