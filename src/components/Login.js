import React, { useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import UserContext from "../context/userContext";
import "./log.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { setUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await axios.post(
        "https://mern-admin-test.herokuapp.com/api/auth/login",
        user
      );
      localStorage.setItem("token", loginResponse.data.body.token);
      localStorage.setItem("profile", loginResponse.data.body.user.profile);

      setUserData({
        token: loginResponse.data.body.token,
        user: loginResponse.data.body.user,
      });
      toast("Wow so easy!");
      history.push("/Dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              onChange={handleChange}
              name="email"
              id="email"
              placeholder="Email"
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              onChange={handleChange}
              name="password"
              id="password"
              placeholder="Password"
            />
            <label>Password</label>
          </div>
          <button type="text">Login</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
export default Login;
