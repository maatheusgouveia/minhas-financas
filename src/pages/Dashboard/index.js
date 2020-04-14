import React, { useEffect, useState, useCallback } from "react";
import { getBtc, getEth, getLtc } from "../../services/bitcointrade";

import {
	Header,
	Title,
	Container,
	Content,
	Item,
	Footer,
	Total,
} from "./styles";

export default function Dashboard() {
	const [BTC, setBtcQuotation] = useState();
	const [ETH, setEthQuotation] = useState();
	const [LTC, setLtcQuotation] = useState();

	const loadQuotation = useCallback(async () => {
		const btcQuotation = await getBtc();
		setBtcQuotation(btcQuotation.data);

		const ethQuotation = await getEth();
		setEthQuotation(ethQuotation.data);

		const ltcQuotation = await getLtc();
		setLtcQuotation(ltcQuotation.data);
	}, []);

	useEffect(() => {
		loadQuotation();
	}, [loadQuotation]);

	return (
		<Container>
			<Header>
				<Title>Minhas finanças</Title>
			</Header>

			<Content>
				<Item>
					<h1>Bitcoin BTC</h1>
					<div>
						<div>
							<strong>Cotação</strong>
							<div>
								{BTC &&
									Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(BTC.data.sell)}
							</div>
						</div>

						<div>
							<strong>Patrimônio</strong>
							<div>
								{BTC &&
									Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(BTC.data.sell * 0.00142262)}
							</div>
						</div>
					</div>
				</Item>

				<Item>
					<h1>Ethereum ETH</h1>
					<div>
						<div>
							<strong>Cotação</strong>
							<div>
								{ETH &&
									Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(ETH.data.sell)}
							</div>
						</div>

						<div>
							<strong>Patrimônio</strong>
							<div>
								{ETH &&
									Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(ETH.data.sell * 0.07765854)}
							</div>
						</div>
					</div>
				</Item>

				<Item>
					<h1>Litecoin LTC</h1>
					<div>
						<div>
							<strong>Cotação</strong>
							<div>
								{LTC &&
									Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(LTC.data.sell)}
							</div>
						</div>

						<div>
							<strong>Patrimônio</strong>
							<div>
								{LTC &&
									Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(LTC.data.sell * 0.04665144)}
							</div>
						</div>
					</div>
				</Item>
			</Content>

			<Footer>
				<Total>
					Patrimônio total:
					{BTC &&
						ETH &&
						LTC &&
						Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(
							BTC.data.sell * 0.00379897 +
								ETH.data.sell * 0.07765854 +
								LTC.data.sell * 0.04665144
						)}
				</Total>
			</Footer>
		</Container>
	);
}
