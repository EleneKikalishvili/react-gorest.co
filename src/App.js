import React from "react";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./protected.route";

import Login from "./pages/login/login.component";
import Signup from "./pages/signup/signup.component";
import Header from "./components/header/header.component";
import Users from "./pages/users/users.component";
import Posts from "./pages/posts/posts.component";
import Home from "./pages/home/home.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/users" exact component={Users} />
        <ProtectedRoute path="/posts" exact component={Posts} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </div>
  );
}

export default App;

// <Route path="/" component={UserCard} />
