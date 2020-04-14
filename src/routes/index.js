import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import history from "../services/history";

export default function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/" component={Dashboard} />
			</Switch>
		</Router>
	);
}
