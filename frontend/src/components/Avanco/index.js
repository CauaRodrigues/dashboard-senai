import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { api } from "../../service/api";
import formatDateTime from "../../utils/formatDateTime";

const chartOptions = {
	series: [
		{
			name: "Avanço",
			data: [5, 7, 80, 70, 12, 66, 29, 71, 60],
		},
	],
	options: {
		chart: {
			type: "area",
			background: "tranparent",
			stacked: true,
			zoom: { type: "x", enabled: true, autoScaleYaxis: true },
			toolbar: { autoSelected: "zoom" },
		},
		stroke: {
			curve: "stepline",
		},
		dataLabels: {
			enabled: true,
		},
		xaxis: {
			categories: [
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
				"08/08/22 11:00:14",
			],
		},
		legend: {
			position: "top",
		},
		grid: {
			show: true,
			borderColor: "#444",
		},
	},
};

const Avanco = () => {
	const [registersNumbers, setRegistersNumbers] = useState(0);

	const [avanceData, setAvanceData] = useState({
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
		api.get("/avances").then((response) => {
			const myLabels = response.data.map((res) => formatDateTime(res.register));
			const mySeries = response.data.map((res) => res.avance);
			setRegistersNumbers(response.data.length);

			setAvanceData({
				labels: {
					categories: myLabels,
				},
				series: [
					{
						name: "s",
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
			text: "Velocidade de Avanço por segundos",
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
				text: "segundos",
			},
		},
	};

	return (
		<>
			<h1>Avanço</h1>

			<ReactApexChart
				options={{ xaxis: avanceData.labels, ...options }}
				series={avanceData.series}
				type="area"
				height="450"
			/>
		</>
	);
};

export default Avanco;
