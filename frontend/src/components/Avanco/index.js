import React from "react";
import ReactApexChart from "react-apexcharts";

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
	return (
		<>
			<h1>Avanço</h1>

			<ReactApexChart
				options={chartOptions.options}
				series={chartOptions.series}
				type="area"
				height="350"
				width="500"
			/>
		</>
	);
};

export default Avanco;
