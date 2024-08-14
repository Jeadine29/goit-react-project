import DecorationTab from "../components/DecorationTab";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.signUp}>
      <header className={styles.signUpInner}>
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
      <section className={styles.authContentParent}>
        <div className={styles.authContent}>
          <img
            className={styles.authImageIcon}
            loading="lazy"
            alt=""
            src="/rectangle-1@2x.png"
          />
          <DecorationTab
            arrow15="/arrow-15.svg"
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
        <div className={styles.signupForm}>
          <form className={styles.formContent}>
            <div className={styles.formFields}>
              <div className={styles.signupDescription}>
                <h1 className={styles.signUp1}>Sign Up</h1>
                <div className={styles.stepIntoA}>
                  Step into a world of hassle-free expense management! Your
                  journey towards financial mastery begins here.
                </div>
              </div>
              <div className={styles.inputFields}>
                <div className={styles.name}>
                  <input
                    className={styles.name1}
                    placeholder="Name"
                    type="text"
                  />
                </div>
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
                  <div className={styles.passwordVisibility}>
                    <img
                      className={styles.eyeOffIcon}
                      alt=""
                      src="/eyeoff.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.signupButton}>
              <button className={styles.signUp2}>
                <div className={styles.signUp3}>Sign Up</div>
              </button>
              <div className={styles.label}>
                <span
                  className={styles.alreadyHaveAccount}
                >{`Already have account? `}</span>
                <span className={styles.signIn}>Sign In</span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
