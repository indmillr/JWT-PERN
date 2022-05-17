import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";

// Components
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Fragment>
      <Router>
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/login'
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path='/register'
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path='/dashboard'
              render={(props) => <Dashboard {...props} />}
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
