import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./AuthActions.module.css";

const AuthActions = ({
  className = "",
  signIn,
  dontHaveAnAccount,
  signUp,
  propWidth,
  propTextDecoration,
  propMinWidth,
}) => {
  const authActionsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const signInStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      minWidth: propMinWidth,
    };
  }, [propTextDecoration, propMinWidth]);

  return (
    <div
      className={[styles.authActions, className].join(" ")}
      style={authActionsStyle}
    >
      <button className={styles.signIn}>
        <a className={styles.signIn1} style={signInStyle}>
          {signIn}
        </a>
      </button>
      <div className={styles.label}>
        <span>{dontHaveAnAccount}</span>
        <span className={styles.signUp}>{signUp}</span>
      </div>
    </div>
  );
};

AuthActions.propTypes = {
  className: PropTypes.string,
  signIn: PropTypes.string,
  dontHaveAnAccount: PropTypes.string,
  signUp: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default AuthActions;