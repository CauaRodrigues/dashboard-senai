import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { api } from "../../service/api";
import formatDateTime from "../../utils/formatDateTime";

const Rotacao = () => {
	const [registersNumbers, setRegistersNumbers] = useState(0);

	const [rotationData, setRotationData] = useState({
		labels: {
			categories: [],
		},
		series: [
			{
				name: "",
				data: [],
			},
		],
	});

	useEffect(() => {
		api.get("/rotations").then((response) => {
			const myLabels = response.data.map((res) => formatDateTime(res.register));
			const mySeries = response.data.map((res) => res.rotation);
			setRegistersNumbers(response.data.length);

			setRotationData({
				labels: {
					categories: myLabels,
				},
				series: [
					{
						name: "RPM",
						data: mySeries,
					},
				],
			});
		});
	}, []);

	const options = {
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "smooth",
			colors: ["#53D8FB"],
		},
		title: {
			text: "Velocidade da Rotação RPM",
			align: "center",
		},
		subtitle: {
			text: `${registersNumbers} Registros`,
			align: "center",
		},
		legend: {
			position: "top",
			horizontalAlign: "left",
		},
		fill: {
			type: "gradient",
			gradient: {
				opacityFrom: 0.6,
				opacityTo: 0.8,
			},
		},
		colors: ["#3777FF"],
		yaxis: {
			title: {
				text: "RPM",
			},
		},
	};

	return (
		<>
			<h1>Rotação</h1>

			<ReactApexChart
				options={{ xaxis: rotationData.labels, ...options }}
				series={rotationData.series}
				type="area"
				height="450"
			/>
		</>
	);
};

export default Rotacao;
