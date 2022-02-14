const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "123BasiC!?321",
	database: "dashboard",
});

db.connect((err) => {
	if (err) {
		console.error(`Error: ${err.message}`);
	} else {
		console.log("Conncted with MySQL successfully");
	}
});

app.use(express.json());

app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET"],
		credentials: true,
	})
);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/rotations", (req, res) => {
	db.query(
		"SELECT id, rotation, register FROM machine ORDER BY register DESC LIMIT 300",
		(err, result) => {
			if (err) {
				console.error(err);
			} else {
				res.send(result);
				console.log(result);
			}
		}
	);
});

app.get("/api/avances", (req, res) => {
	db.query(
		"SELECT id, avance, register FROM machine ORDER BY register LIMIT 150",
		(err, result) => {
			if (err) {
				console.error(err);
			} else {
				res.send(result);
				console.log(result);
			}
		}
	);
});

app.get("/api/temperature", (req, res) => {
	db.query(
		"SELECT id, temperature, register FROM machine ORDER BY register DESC LIMIT 30",
		(err, result) => {
			if (err) {
				console.error(err);
			} else {
				res.send(result);
				console.log(result);
			}
		}
	);
});

app.get("/api/maximum", (req, res) => {
	db.query(
		"SELECT MAX(rotation) as maxRotation, MAX(temperature) as maxTemperature, MAX(avance) as maxAvance FROM machine",
		(err, result) => {
			if (err) {
				console.error(err);
			} else {
				res.send(result);
				console.log(result);
			}
		}
	);
});

app.listen(3001, () => {
	console.log("Running on http://localhost:3001/");
});
