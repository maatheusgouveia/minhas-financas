import styled from "styled-components";

export const Header = styled.header`
	background: #fff;
	width: 100%;
	text-align: center;
`;

export const Title = styled.h1``;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: #111;
	height: 100%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Item = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	width: 250px;
	height: 250px;
	background: #fff;
	margin: 30px;
	border-radius: 4px;

	div strong {
		display: block;
	}

	div {
		display: flex;
		flex-direction: row;
		color: #333;
		font-weight: bold;
	}

	div div {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
`;

export const Footer = styled.footer`
	display: flex;
	background: #fff;
	width: 100%;
	text-align: center;
`;

export const Total = styled.h2``;
