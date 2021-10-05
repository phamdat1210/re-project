import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './auth-route';
import { AuthContext } from '../context/auth';
import HomeScreen from '../pages/HomeScreen';
import LoDeScreen from '../pages/LoDeScreen';
import PATH from './path';
import {
	TransitionGroup,
	CSSTransition
} from "react-transition-group";

const Routes = () => {

	const timeout = { enter: 600, exit: 600 };

	return (
		<AuthContext.Provider value = {false}>
			<TransitionGroup>
				<CSSTransition
					timeout={timeout}
					classNames="fade"
					appear
				>
					<Router>
						<Route exact path = {PATH.HOME} component = {HomeScreen}/>
						<Route exact path = {PATH.LODE} component = {LoDeScreen}/>
					</Router>
				</CSSTransition>
			</TransitionGroup>
			
		</AuthContext.Provider>
	);
};

export default Routes;