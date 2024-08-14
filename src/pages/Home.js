import BgImageWrapper from "../SharedLayout/BgImageWrapper";
import AllUsersTab from "../components/AllUsersTab";
import DecorationTab from "../components/DecorationTab";
import Header from "../SharedLayout/Header";
import PropTypes from "prop-types";
import styles from "./Home.module.css";

const Home = ({ className = "" }) => {
  return (
    <div className={[styles.home, className].join(" ")}>
      <BgImageWrapper />
      <div className={styles.block}>
        <div className={styles.expenseLog}>Expense log</div>
        <div className={styles.block1}>
          <div className={styles.text}>
            <div className={styles.manageYourFinancesContainer}>
              <span className={styles.manageYour}>Manage Your</span>
              <span>{` `}</span>
              <span>
                <span className={styles.finances}>{`Finances `}</span>
              </span>
              <span className={styles.manageYour}>Masterfully!</span>
            </div>
            <div className={styles.expensetrackerEffortlesslyEm}>
              ExpenseTracker effortlessly empowers you to take control of your
              finances! With intuitive features, it simplifies the process of
              tracking and managing expenses, allowing for a stress-free mastery
              over your financial world.
            </div>
          </div>
          <div className={styles.btns}>
            <div className={styles.signUp}>
              <div className={styles.signUp1}>Sign Up</div>
            </div>
            <div className={styles.signIn}>
              <div className={styles.signUp1}>Sign In</div>
            </div>
          </div>
        </div>
      </div>
      <AllUsersTab />
      <DecorationTab />
      <div className={styles.logo}>
        <img className={styles.icon} alt="" src="/icon1.svg" />
        <Header />
      </div>
    </div>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
