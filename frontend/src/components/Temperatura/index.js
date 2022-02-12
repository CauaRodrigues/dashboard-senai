import React from "react";
import ReactApexChart from "react-apexcharts";

const chartOptions = {
	series: [
		{
			name: "Temperatura",
			data: [5, 7, 80, 70, 12, 66, 29, 71, 60],
		},
	],
	options: {
		chart: {
			background: "tranparent",
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
		},
	},
};

const Temperatura = () => {
	return (
		<>
			<h1>Temperatura</h1>

			<ReactApexChart
				options={chartOptions.options}
				series={chartOptions.series}
				type="bar"
				height="350"
				width="500"
			/>
		</>
	);
};

export default Temperatura;
