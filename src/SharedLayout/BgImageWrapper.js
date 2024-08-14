import PropTypes from "prop-types";
import styles from "./BgImageWrapper.module.css";

const BgImageWrapper = ({ className = "" }) => {
  return (
    <img
      className={[styles.homeChild, className].join(" ")}
      alt=""
      src="/public/rectangle-11@2x.png"
    />
  );
};

BgImageWrapper.propTypes = {
  className: PropTypes.string,
};

export default BgImageWrapper;
