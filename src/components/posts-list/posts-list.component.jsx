import React, { useState, useEffect } from "react";
import { getComments } from "../../api";
import CommentsCard from "../comments-card/comments-card.component";

import styles from "./posts-list.module.css";

function Posts() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      getComments().then((res) => {
        setComments(res.data.result);
      });
    }
    return () => (isSubscribed = false);
  }, []);

  const content = comments.map((com) => {
    return (
      <CommentsCard
        key={com.id}
        name={com.name}
        body={com.body}
        postId={com.post_id}
      />
    );
  });

  return <div className={styles.container}>{content}</div>;
}

export default Posts;
