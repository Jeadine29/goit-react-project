import PropTypes from "prop-types";
import styles from "./AllUsersTab.module.css";

const AllUsersTab = ({ className = "" }) => {
  return (
    <div className={[styles.users, className].join(" ")}>
      <div className={styles.images}>
        <img className={styles.imageIcon} alt="" src="/image5@2x.png" />
        <img className={styles.imageIcon1} alt="" src="/image4@2x.png" />
        <img className={styles.imageIcon1} alt="" src="/image31@2x.png" />
      </div>
      <div className={styles.text}>
        <div className={styles.users1}>{`1000 users + `}</div>
        <div className={styles.trustedByUsers}>
          Trusted by users for reliable expense tracking!
        </div>
      </div>
    </div>
  );
};

AllUsersTab.propTypes = {
  className: PropTypes.string,
};

export default AllUsersTab;
