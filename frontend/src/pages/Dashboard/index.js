import React from "react";
import Avanco from "../../components/Avanco";
import CardTemp from "../../components/CardTemp";
import Header from "../../components/Header";
import Rotacao from "../../components/Rotacao";
import Temperatura from "../../components/Temperatura";
import "./style.css";

const Dashboard = () => {
	return (
		<>
			<Header />

			<article className="container">
				<section className="cards">
					<CardTemp />
					<CardTemp />
					<CardTemp />
				</section>

				<section className="charts">
					<div className="chart-main">
						<Rotacao />
					</div>

					<div className="double-chart">
						<div className="chart">
							<Temperatura />
						</div>

						<div className="chart">
							<Avanco />
						</div>
					</div>
				</section>
			</article>
		</>
	);
};

export default Dashboard;
