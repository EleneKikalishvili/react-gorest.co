import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { setCurrentUser } from "../../redux/user/user.actions";

import styles from "./login.module.css";

function Login({ setCurrentUser, history, currentUser }) {
  const [user, setUser] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setCurrentUser(user);
    history.push("/");
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Log In</h1>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <div className="form-group">
          <label className={styles.left} htmlFor="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="form-group">
          <label className={styles.left} htmlFor="exampleInputEmail1">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={user}
            onChange={handleUserChange}
          />
        </div>
        <div className="form-group">
          <label className={styles.left} htmlFor="exampleInputPassword1">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className={styles.footer}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
