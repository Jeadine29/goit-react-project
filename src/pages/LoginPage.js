import DecorationTab from "./DecorationTab";
import AuthActions from "./AuthActions";
import PropTypes from "prop-types";
import styles from "./LoginPage.module.css";

const LoginPage = ({ className = "" }) => {
  return (
    <div className={[styles.signIn, className].join(" ")}>
      <header className={styles.signInInner}>
        <div className={styles.frameParent}>
          <div className={styles.iconWrapper}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
          <a className={styles.expensetracker}>ExpenseTracker</a>
        </div>
      </header>
      <section className={styles.sidebarContentParent}>
        <div className={styles.sidebarContent}>
          <img
            className={styles.sidebarDividerIcon}
            loading="lazy"
            alt=""
            src="/rectangle-1@2x.png"
          />
          <DecorationTab
            blockLeft="-71px"
            blockWidth="303px"
            frameDivFlex="1"
            yourBalanceDisplay="inline-block"
            yourBalanceMinWidth="96px"
            frameDivAlignSelf="stretch"
            currencySymbolFlex="1"
            amountDisplay="inline-block"
            amountMinWidth="42px"
          />
        </div>
        <div className={styles.authContentWrapper}>
          <div className={styles.authContent}>
            <div className={styles.authDetails}>
              <div className={styles.authHeader}>
                <h1 className={styles.signIn1}>Sign In</h1>
                <div className={styles.welcomeBackTo}>
                  Welcome back to effortless expense tracking! Your financial
                  dashboard awaits.
                </div>
              </div>
              <div className={styles.inputFields}>
                <div className={styles.email}>
                  <input
                    className={styles.email1}
                    placeholder="Email"
                    type="text"
                  />
                </div>
                <div className={styles.password}>
                  <input
                    className={styles.password1}
                    placeholder="Password"
                    type="text"
                  />
                  <div className={styles.eyeOffWrapper}>
                    <img
                      className={styles.eyeOffIcon}
                      alt=""
                      src="/eyeoff.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <AuthActions
              signIn="Sign In"
              dontHaveAnAccount="Don’t have an account? "
              signUp="Sign Up"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

LoginPage.propTypes = {
  className: PropTypes.string,
};

export default LoginPage;
