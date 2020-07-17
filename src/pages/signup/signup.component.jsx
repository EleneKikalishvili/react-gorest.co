import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from "../../redux/user/user.actions";

import { createUser } from "../../api/index";

import styles from "./signup.module.css";

function SignUp({ history, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  const user = {
    first_name: firstName,
    last_name: lastName,
    gender: gender,
    email: email,
    status: "active",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      url: `users`,
      data: user,
    }).then((res) => {
      if (res.data._meta.success) {
        setCurrentUser(firstName);
        history.push("/");
      } else {
        setCurrentUser(null);
        window.alert("something went wrong");
      }
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className="form-group">
          <label className={styles.left} htmlFor="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label className={styles.left} htmlFor="exampleInputPassword1">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label className={styles.left} htmlFor="exampleInputPassword1">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label className={styles.left} htmlFor="inlineFormCustomSelectPref">
            Choose Gender
          </label>
          <select
            className="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            defaultValue={"default"}
            onChange={handleGenderChange}
          >
            <option value="default">Choose...</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        <div className={styles.footer}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/login">Log In</Link>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
