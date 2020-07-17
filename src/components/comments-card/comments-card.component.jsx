import React, { useState } from "react";
import PostCard from "../post-card/post-card.components";

import styles from "./comments-card.module.css";

function UserCard({ name, body, postId, isLoading }) {
  const [hidden, setHidden] = useState(true);
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>
        User: {name} {postId}
      </h4>
      <div className={styles.body}>
        <p>{body}</p>
      </div>
      <button className={styles.btn} onClick={() => setHidden(!hidden)}>
        Show Post
      </button>
      {!hidden ? <PostCard id={postId} /> : null}
    </div>
  );
}

export default UserCard;
