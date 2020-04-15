import { combineReducers } from "redux";

import tickers from "./tickers/reducer";

/* TODO: Excluir o theme e colocar junto com as informações do usuário ou grupo de usuário */
export default combineReducers({ tickers });
