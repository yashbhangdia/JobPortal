import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Dummy from './Dummy/dummy';

function App(){
	return(
		<div>
			<Router>
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/dummy" component={Dummy}/>
				</Switch>
			</Router>
		</div>

	);
}

export default App;