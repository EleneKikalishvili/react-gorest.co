import React, { useState, useEffect } from "react";
import UsersList from "../../components/users-list/users-list.component";
import withSpinner from "../../components/spinner/spinner.component";

import styles from "./users.module.css";

function UsersPage() {
  const [Loading, setLoading] = useState(true);

  const UsersWithSpinner = withSpinner(UsersList);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <UsersWithSpinner isLoading={Loading} />
    </div>
  );
}

export default UsersPage;
