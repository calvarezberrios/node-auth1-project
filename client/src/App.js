import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import UsersPage from "./components/UsersPage";

function App() {


  return (
    <div className="App">
      <h1>User Authentication API</h1>
      <Route exact path = "/" component = {Login} />
      <Route path = "/register" component = {Register} />
      <Route path = "/users" component = {UsersPage} />
    </div>
  );
}

export default App;
