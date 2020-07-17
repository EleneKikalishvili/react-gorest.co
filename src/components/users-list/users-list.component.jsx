import React, { useState, useEffect } from "react";
import { getUsers } from "../../api/index";

import UserCard from "../user-card/user-card.component";
import Search from "../search/search.component";

import styles from "./users-list.module.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      getUsers().then((res) => {
        setUsers(res.data.result);
      });
    }
    return () => (isSubscribed = false);
  }, []);

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.first_name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const content = filteredUsers.map((user) => {
    return (
      <UserCard
        key={user.id}
        firstName={user.first_name}
        lastName={user.last_name}
        email={user.email}
        phone={user.phone}
        image={user._links.avatar.href}
      />
    );
  });

  return (
    <div className={styles.container}>
      <Search searchChange={onSearchChange} />
      <div className={styles.usersContainer}> {content}</div>
    </div>
  );
}

export default Users;
