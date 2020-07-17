import React, { useState, useEffect } from "react";
import { getPosts } from "../../api";

import styles from "./post-card.module.css";

function PostCard({ id }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPosts(id).then((res) => {
      setPost(res.data.result);
    });
  }, [id]);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Title: {post.title}</h4>
      <div className={styles.body}>
        <p>POST: {post.body}</p>
      </div>
    </div>
  );
}

export default PostCard;
