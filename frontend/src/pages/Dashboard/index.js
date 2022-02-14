import React, { useEffect, useState } from "react";
import Avanco from "../../components/Avanco";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Rotacao from "../../components/Rotacao";
import Temperatura from "../../components/Temperatura";
import { api } from "../../service/api";
import "./style.css";

const Dashboard = () => {
	const [rotationMax, setRotationMax] = useState(0);
	const [temperatureMax, setTemperatureMax] = useState(0);
	const [avanceMax, setAvanceMax] = useState(0);

	useEffect(() => {
		api.get("/maximum").then(({ data }) => {
			setRotationMax(data[0].maxRotation);
			setTemperatureMax(data[0].maxTemperature);
			setAvanceMax(data[0].maxAvance);
		});
	}, []);

	return (
		<>
			<Header />

			<article className="container">
				<section className="cards">
					<Card cardType="temp" iconType="temperature">
						<h3>{temperatureMax}º</h3>
						<p>Temperatura Máxima</p>
					</Card>

					<Card cardType="avance" iconType="avance">
						<h3>{avanceMax}s</h3>
						<p>Velo. de Avanço Máxima</p>
					</Card>

					<Card cardType="rotation" iconType="rotation">
						<h3>{rotationMax} RPM</h3>
						<p>Velo. de Rotação Máxima</p>
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
