import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #000;
	height: 100%;
`;

export const Header = styled.header`
	display: flex;
	background: #111116;
	width: 100%;
	height: 80px;
	align-items: center;
	justify-content: space-between;
	color: #fff;
	padding-left: 30px;
	padding-right: 30px;
`;

export const Title = styled.h1``;

export const Profile = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #333;
		width: 40px;
		height: 40px;
		border-radius: 3px;
		border: none;
		color: #fff;

		svg {
			height: 25px;
			width: 25px;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		margin-left: 15px;
	}
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
	background: #111116;
	width: 100%;
	height: 80px;
	align-items: center;
	justify-content: flex-start;
	color: #fff;
`;

export const Total = styled.h2`
	margin-left: 30px;
`;
