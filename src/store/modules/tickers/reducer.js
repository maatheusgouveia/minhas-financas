import produce from "immer";
import Types from "./types";

import data from "../../../data";

const INITIAL_VALUES = data;

export default function tickers(state = INITIAL_VALUES, action) {
	return produce(state, (draft) => {
		switch (action.type) {
			case Types.GET_TICKERS_SUCCESS: {
				console.log(action);
				break;
			}
			case Types.GET_TICKERS_FAILURE: {
				console.log(action);
				break;
			}
			default:
		}
	});
}
