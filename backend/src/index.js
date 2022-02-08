const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "dashboard",
});

app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET"],
		credentials: true,
	})
);

app.listen(3001, () => {
	console.log("Running on http://localhost:3001/");
});
