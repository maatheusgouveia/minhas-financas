import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

import {
	Header,
	Title,
	Container,
	Content,
	Item,
	Footer,
	Total,
} from "./styles";
import { useSelector } from "react-redux";

export default function Dashboard() {
	const tickers = useSelector((state) => state.tickers.data);

	const [portfolio, setPortfolio] = useState([]);
	const [total, setTotal] = useState(0);

	const data = {
		labels: portfolio.map((coin) => coin.symbol),
		datasets: [
			{
				data: portfolio.map(
					(coin) => coin.quote.BRL.price * coin.custody
				),
				backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			},
		],
	};

	useEffect(() => {
		const data = [
			{ symbol: "BTC", custody: 0.00379897 },
			{ symbol: "ETH", custody: 0.07765854 },
			{ symbol: "LTC", custody: 0.04665144 },
			{ symbol: "NANO", custody: 2.000802 },
		];

		setPortfolio(
			data.map((stock) => ({
				...tickers[stock.symbol],
				custody: stock.custody,
			}))
		);
	}, [tickers]);

	useEffect(() => {
		portfolio[0] &&
			setTotal(
				portfolio.reduce(
					(acc, coin) => acc + coin.quote.BRL.price * coin.custody,
					0
				)
			);
	}, [portfolio]);

	return (
		<Container>
			<Header>
				<Title>Minhas finanças</Title>
			</Header>

			<Content>
				<Item>
					<Doughnut legend={{ display: false }} data={data} />
				</Item>

				{portfolio.map((coin) => (
					<Item key={coin.symbol}>
						<h1>{`${coin.name} ${coin.symbol}`}</h1>
						<div>
							<div>
								<strong>Cotação</strong>
								<div>
									{Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(coin.quote.BRL.price)}
								</div>
							</div>

							<div>
								<strong>Patrimônio</strong>
								<div>
									{Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(
										coin.quote.BRL.price * coin.custody
									)}
								</div>
							</div>
						</div>
					</Item>
				))}
			</Content>

			<Footer>
				<Total>
					Patrimônio total:{" "}
					{Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(total)}
				</Total>
			</Footer>
		</Container>
	);
}
