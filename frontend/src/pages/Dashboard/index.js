import React from "react";
import Avanco from "../../components/Avanco";
import Card from "../../components/Card";
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
					<Card cardType="temp" iconType="temperature">
						<h3>80º</h3>
						<p>Temperatura Máxima</p>
						<p>08/08/2022</p>
					</Card>

					<Card cardType="avance" iconType="avance">
						<h3>2.45</h3>
						<p>Velo. de Avanço Máxima</p>
						<p>08/08/2022</p>
					</Card>

					<Card cardType="rotation" iconType="rotation">
						<h3>43s</h3>
						<p>Velo. de Rotação Máxima</p>
						<p>08/08/2022</p>
					</Card>
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
