import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <b className={[styles.expensetracker, className].join(" ")}>
      ExpenseTracker
    </b>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
