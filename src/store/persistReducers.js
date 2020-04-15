import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default (reducers) => {
	const persistedReducer = persistReducer(
		{
			key: "minhasfinancas",
			storage,
		},
		reducers
	);

	return persistedReducer;
};
