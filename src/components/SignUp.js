import React, { useState } from "react";
import "./Sign.css";
function SignUp() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username && user.email && user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      setUser({ username: "", email: "", password: "" });
    } else {
      setError("Form cannot be Empty");
    }
  };
  return (
    <>
      <div className="user">
        <header className="user__header">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
            alt=""
          />
          <h1 className="user__title">A lightweight and simple sign-up form</h1>
        </header>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form__input"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form__input"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form__input"
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit">
            SignUp
          </button>
        </form>
        <h1 style={{ color: "red", fontSize: "32px" }}>{error}</h1>
      </div>
    </>
  );
}

export default SignUp;
