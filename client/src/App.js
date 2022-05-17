import React, { Fragment, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Fragment>
      <Router>
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/login'
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} />
                ) : (
                  <Navigate to='/dashboard' />
                )
              }
            />
            <Route
              exact
              path='/register'
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} />
                ) : (
                  <Navigate to='/login' />
                )
              }
            />
            <Route
              exact
              path='/dashboard'
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard {...props} />
                ) : (
                  <Navigate to='/login' />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
