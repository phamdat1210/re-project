import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './auth-route';
import { AuthContext } from '../context/auth';
import HomeScreen from '../pages/HomeScreen';
import LoDeScreen from '../pages/LoDeScreen';
import PATH from './path';

const Routes = () => {

	return (
		<AuthContext.Provider value = {false}>
			<Router>
				<Route exact path = {PATH.HOME} component = {HomeScreen}/>
				<Route exact path = {PATH.LODE} component = {LoDeScreen}/>
			</Router>
		</AuthContext.Provider>
	);
};

export default Routes;