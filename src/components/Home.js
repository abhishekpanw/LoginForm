import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/userContext";

import "./Hom.css";

function Home() {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
  };
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/");
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" data-toggle="open-navbar1">
              <span />
              <span />
              <span />
            </button>
            <a href="#">
              <h4>
                Awesome<span>logo</span>
              </h4>
            </a>
          </div>
          <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li className="navbar-dropdown">
                <a
                  href="#"
                  className="dropdown-toggler"
                  data-dropdown="my-dropdown-id"
                >
                  Categories <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown" id="my-dropdown-id">
                  <li>
                    <a href="#">Actions</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="separator" />
                  <li>
                    <a href="#">Seprated link</a>
                  </li>
                  <li className="separator" />
                  <li>
                    <a href="#">One more seprated link.</a>
                  </li>
                </ul>
              </li>
              <li className="navbar-dropdown">
                <a href="#" className="dropdown-toggler" data-dropdown="blog">
                  Blog <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown" id="blog">
                  <li>
                    <a href="#">Some category</a>
                  </li>
                  <li>
                    <a href="#">Some another category</a>
                  </li>
                  <li className="separator" />
                  <li>
                    <a href="#">Seprated link</a>
                  </li>
                  <li className="separator" />
                  <li>
                    <a href="#">One more seprated link.</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  LogOut
                </Link>
              </li>
              <li>
                {localStorage.getItem("profile") && (
                  <>
                    <img
                      src={localStorage.getItem("profile")}
                      style={{ paddingTop: "12px" }}
                    ></img>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
