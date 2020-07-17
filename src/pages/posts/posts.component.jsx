import React, { useState, useEffect } from "react";
import PostsList from "../../components/posts-list/posts-list.component";
import withSpinner from "../../components/spinner/spinner.component";

import styles from "./posts.module.css";

function PostsPage() {
  const [Loading, setLoading] = useState(true);

  const PostsWithSpinner = withSpinner(PostsList);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <PostsWithSpinner isLoading={Loading} />
    </div>
  );
}

export default PostsPage;
