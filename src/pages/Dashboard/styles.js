import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	background: #fff;
	width: 100%;
	height: 80px;
	align-items: center;
	justify-content: center;
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
	display: grid;
	flex-direction: row;
	grid-template-columns: repeat(3, 1fr);
`;

export const Item = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	width: 230px;
	height: 230px;
	background: #fff;
	margin: 30px;
	border-radius: 4px;
	justify-content: center;

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
	height: 80px;
	align-items: center;
	justify-content: flex-start;
`;

export const Total = styled.h2`
	margin-left: 20px;
`;
