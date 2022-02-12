import React from "react";
import ReactApexChart from "react-apexcharts";

const chartOptions = {
	series: [
		{
			name: "Rotação",
			data: [48, 70, 20, 90, 36, 80, 30, 91, 60],
		},
	],
	options: {
		chart: {
			background: "tranparent",
		},
		dataLabels: {
			enabled: true,
		},
		stroke: {
			curve: "smooth",
		},

		xaxis: {
			type: "category",
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
			position: "bottom",
		},
		grid: {
			show: true,
		},
	},
};

const Rotacao = () => {
	return (
		<>
			<h1>Rotação</h1>

			<ReactApexChart
				options={chartOptions.options}
				series={chartOptions.series}
				type="area"
				height="350"
			/>
		</>
	);
};

export default Rotacao;
