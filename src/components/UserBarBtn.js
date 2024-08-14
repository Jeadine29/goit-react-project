import PropTypes from "prop-types";
import styles from "./UserBarBtn.module.css";

const UserBarBtn = ({ className = "" }) => {
  return (
    <div className={[styles.user, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className={styles.alexRybachokWrapper}>
        <a className={styles.alexRybachok}>Alex Rybachok</a>
      </div>
      <div className={styles.chevronDownWrapper}>
        <img
          className={styles.chevronDownIcon}
          loading="lazy"
          alt=""
          src="/chevrondown.svg"
        />
      </div>
    </div>
  );
};

UserBarBtn.propTypes = {
  className: PropTypes.string,
};

export default UserBarBtn;