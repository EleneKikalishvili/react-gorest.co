import React from "react";

import styles from "./spinner.module.css";

const Spinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className={styles.spinnerOverlay}>
      <div className={styles.container} />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default Spinner;
