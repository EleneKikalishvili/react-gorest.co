import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { setCurrentUser } from "../../redux/user/user.actions";

import styles from "./header.module.css";

function Header({ currentUser, setCurrentUser }) {
  return (
    <div>
      {!currentUser ? (
        <div className={styles.noUserContainer}>
          {" "}
          <h3 className={styles.noUserTitle}>Log In / Sign Up First!</h3>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.title}>
            <h3>Hey {currentUser}!</h3>
          </div>

          <div className={styles.options}>
            <NavLink className={styles.optionsLink} to="/">
              Home
            </NavLink>
            <NavLink className={styles.optionsLink} to="/users">
              Users{" "}
            </NavLink>
            <NavLink className={styles.optionsLink} to="/posts">
              Posts
            </NavLink>
          </div>
          <div className={styles.logout}>
            <button className={styles.btn} onClick={() => setCurrentUser(null)}>
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
