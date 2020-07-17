import React, { useState } from "react";
import { getSearchInfo } from "../../api";
import Search from "../../components/search/search.component";
import UserCard from "../../components/user-card/user-card.component";

import Styles from "./home.module.css";

function Home() {
  const [searchfield, setSearchfield] = useState("");
  const [users, setUsers] = useState("");

  const getUsers = (name) => {
    getSearchInfo(name).then((res) => {
      setUsers(res.data.result);
    });
  };

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const onClick = () => {
    searchfield ? getUsers(searchfield) : window.alert("Search user by name");
  };

  let content = null;

  if (users) {
    content = users.map((user) => {
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
  }

  return (
    <div className={Styles.container}>
      <h3>Search For Users by FirstName</h3>
      <div className={Styles.search}>
        <Search className={Styles.input} searchChange={onSearchChange} />
        <button className={Styles.btn} onClick={onClick}>
          Search User
        </button>
      </div>
      <div className={Styles.usersContainer}>{content}</div>
    </div>
  );
}

export default Home;
