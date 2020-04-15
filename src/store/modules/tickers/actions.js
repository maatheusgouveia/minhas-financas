import Types from "./types";

export function getTickersRequest() {
	return {
		type: Types.GET_TICKERS_REQUEST,
	};
}

export function getTickersSuccess() {
	return {
		type: Types.GET_TICKERS_SUCCESS,
	};
}

export function getTickersFailure() {
	return {
		type: Types.GET_TICKERS_FAILURE,
	};
}
