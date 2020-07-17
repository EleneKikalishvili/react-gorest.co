import React from "react";

import styles from "./user-card.module.css";

function UserCard({ firstName, lastName, email, phone, image }) {
  return (
    <div className={styles.container}>
      <p className={styles.fullName}>
        {firstName} {lastName}
      </p>

      <img className={styles.userImg} alt="userPic" src={image} />
      <div className={styles.info}>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
      </div>
    </div>
  );
}

export default UserCard;
