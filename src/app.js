import express from "express";
import mysql from "mysql";
import myconn from "express-myconnection";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config({
	path: "./.env",
});

// Database
// import "./config/db.js";

// Routes
import AgendaRoutes from "./routes/agenda.routes.js";

// Create APP
const app = express();

// Setting
const PORT = process.env.PORT || 5000;
const dbConn = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
};

// Middleware
app.use(myconn(mysql, dbConn, "single"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(express.static("./public"));

// Routtes
app.use("/api/v1/agenda", AgendaRoutes);
// Server listenting
app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
