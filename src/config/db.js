import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config({
	path: "./.env",
});

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

connection.connect();
console.log("Database is connected!");

export default connection;
