import axios from "axios";

export async function getTickers() {
	return axios.get(
		"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
	);
}
