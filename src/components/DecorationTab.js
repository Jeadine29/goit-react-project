import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./DecorationTab.module.css";

const DecorationTab = ({ className = "", blockTop, blockLeft }) => {
  const blockStyle = useMemo(() => {
    return {
      top: blockTop,
      left: blockLeft,
    };
  }, [blockTop, blockLeft]);

  return (
    <div className={[styles.block, className].join(" ")} style={blockStyle}>
      <div className={styles.blockChild} />
      <img className={styles.blockItem} alt="" src="/arrow-15.svg" />
      <div className={styles.text}>
        <div className={styles.yourBalance}>Your balance</div>
        <b className={styles.b}>$632.000</b>
      </div>
      <div className={styles.blockInner} />
      <div className={styles.div}>+1.29%</div>
    </div>
  );
};

DecorationTab.propTypes = {
  className: PropTypes.string,

  /** Style props */
  blockTop: PropTypes.any,
  blockLeft: PropTypes.any,
};

export default DecorationTab;
