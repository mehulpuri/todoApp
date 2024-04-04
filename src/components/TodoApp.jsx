import React, { useState } from "react";
import "./TodoApp.css";
const TodoApp = () => {
  return (
    <div className="TodoApp">
      TodoApp
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  );
};

function LoginComponent() {
  const [username, setUsername] = useState("mehul");
  const [password, setPassword] = useState("mehul");

  function handleUserchange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordchange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="Login">
      <div className="Loginform">
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUserchange}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={username}
            onChange={handleUserchange}
          ></input>
        </div>
        <div>
          <button type="button" name="login">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div className="Welcome">Welcome Component</div>;
}
export default TodoApp;
