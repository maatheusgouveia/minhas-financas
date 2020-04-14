import axios from "axios";

export async function getBtc() {
	return axios.get("https://api.bitcointrade.com.br/v3/public/BRLBTC/ticker");
}

export async function getEth() {
	return axios.get("https://api.bitcointrade.com.br/v3/public/BRLETH/ticker");
}

export async function getLtc() {
	return axios.get("https://api.bitcointrade.com.br/v3/public/BRLLTC/ticker");
}
