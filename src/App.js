import React from "react";
import { PersistGate } from "redux-persist/integration/react";

import GlobalStyle from "./styles/global";

import Routes from "./routes";
import { persistor, store } from "./store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Routes />
				<GlobalStyle />
			</PersistGate>
		</Provider>
	);
}

export default App;
