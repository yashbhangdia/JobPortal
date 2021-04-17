import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Dummy from './Dummy/dummy';
import Dashboard from './Applicant/Dashboard';

function App(){
	return(
		<div>
			<Router>
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/dummy" component={Dummy}/>
					<Route path="/Dashboard" component={Dashboard} exact/>
				</Switch>
			</Router>
		</div>

	);
}

export default App;