import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Dashboard from './Applicant/Dashboard';
import BuildResume from './Applicant/BuildResume';
import Resume from './Applicant/Resume';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";

import PrivateRoute from "../Components/private-route/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
  // Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
	  // Logout user
	  store.dispatch(logoutUser());
	  // Redirect to login
	  window.location.href = "/";
	}
  }

function App(){
	return(
		<div>
			<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/" component={Home} exact/>
					<PrivateRoute path="/buildResume" component={BuildResume} exact/>
					<PrivateRoute path="/resume" component={Resume} exact/>
					<PrivateRoute path="/Dashboard" component={Dashboard} exact/>
				</Switch>
			</Router>
			</Provider>
		</div>

	);
}

export default App;