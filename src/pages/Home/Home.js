import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.frame}>
        <div className={styles.logo}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
          <a className={styles.expensetracker}>ExpenseTracker</a>
        </div>
      </header>
      <section className={styles.sidePanel}>
        <div className={styles.frame1}>
          <div className={styles.balanceValue}>
            <img
              className={styles.valueBackgroundIcon}
              loading="lazy"
              alt=""
              src="/rectangle-1@2x.png"
            />
          </div>
          <div className={styles.block}>
            <img
              className={styles.amountPlaceholderIcon}
              alt=""
              src="/frame.svg"
            />
            <div className={styles.balanceDetails}>
              <div className={styles.text}>
                <div className={styles.yourBalance}>Your balance</div>
                <b className={styles.currencySymbol}>$632.000</b>
              </div>
              <div className={styles.balanceAmount}>
                <div className={styles.amountValue}>
                  <div className={styles.amount}>+1.29%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.block1}>
            <a className={styles.expenseLog}>Expense log</a>
            <div className={styles.block2}>
              <div className={styles.text1}>
                <h1 className={styles.manageYourFinancesContainer}>
                  <span className={styles.manageYour}>Manage Your</span>
                  <span>{` `}</span>
                  <span>
                    <span className={styles.finances}>{`Finances `}</span>
                  </span>
                  <span className={styles.manageYour}>Masterfully!</span>
                </h1>
                <div className={styles.expensetrackerEffortlesslyEm}>
                  ExpenseTracker effortlessly empowers you to take control of
                  your finances! With intuitive features, it simplifies the
                  process of tracking and managing expenses, allowing for a
                  stress-free mastery over your financial world.
                </div>
              </div>
              <div className={styles.btns}>
                <button className={styles.signUp}>
                  <a className={styles.signUp1}>Sign Up</a>
                </button>
                <button className={styles.signIn}>
                  <div className={styles.signIn1}>Sign In</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.users}>
            <div className={styles.images}>
              <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
              <img className={styles.imageIcon1} alt="" src="/image3@2x.png" />
              <img
                className={styles.imageIcon2}
                loading="lazy"
                alt=""
                src="/image4@2x.png"
              />
            </div>
            <div className={styles.text2}>
              <div className={styles.users1}>{`1000 users + `}</div>
              <div className={styles.trustedByUsers}>
                Trusted by users for reliable expense tracking!
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
