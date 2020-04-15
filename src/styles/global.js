import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}

	html, body, #root {
		height: 100%;
	}

	body {
		-webkit-font-smoothing: antialiased;
	}
`;

export default GlobalStyle;
