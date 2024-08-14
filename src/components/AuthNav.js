import PropTypes from "prop-types";
import styles from "./AuthNav.module.css";

const AuthNav = ({ className = "" }) => {
  return (
    <div className={[styles.btns, className].join(" ")}>
      <button className={styles.signUp}>
        <a className={styles.signUp1}>Sign Up</a>
      </button>
      <button className={styles.signIn}>
        <a className={styles.signIn1}>Sign In</a>
      </button>
    </div>
  );
};

AuthNav.propTypes = {
  className: PropTypes.string,
};

export default AuthNav;