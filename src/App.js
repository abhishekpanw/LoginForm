import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import UserContext from "./context/userContext";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Dashboard" component={Home} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
