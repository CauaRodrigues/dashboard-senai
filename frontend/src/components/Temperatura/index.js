import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { api } from "../../service/api";
import formatDateTime from "../../utils/formatDateTime";

const Temperatura = () => {
	const [registersNumbers, setRegistersNumbers] = useState(0);

	const [temperatureData, setTemperatureData] = useState({
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
		api.get("/temperature").then((response) => {
			const myLabels = response.data.map((res) => formatDateTime(res.register));
			const mySeries = response.data.map((res) => res.temperature).reverse();
			setRegistersNumbers(response.data.length);

			setTemperatureData({
				labels: {
					categories: myLabels,
				},
				series: [
					{
						name: "ºC",
						data: mySeries,
					},
				],
			});
		});
	}, []);

	const options = {
		plotOptions: {
			bar: {
				borderRadius: 5,
				columnWidth: "50%",
			},
		},
		chart: {
			background: "transparent",
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: 2,
		},
		yaxis: {
			title: {
				text: "Temperatura",
			},
		},
		title: {
			text: "Temperatura da Máquina ºC",
			align: "center",
		},
		subtitle: {
			text: `${registersNumbers} Registros`,
			align: "center",
		},
		fill: {
			type: "gradient",
			colors: ["#3777FF"],
			gradient: {
				opacityFrom: 0.6,
				opacityTo: 0.8,
			},
		},
	};

	return (
		<>
			<h1>Temperatura</h1>

			<ReactApexChart
				options={{ xaxis: temperatureData.labels, ...options }}
				series={temperatureData.series}
				type="bar"
				height="450"
			/>
		</>
	);
};

export default Temperatura;
