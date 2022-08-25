import { getAllDirectory } from "../services/agendaService.js";

export const getAll = (req, res) => {
	req.getConnection((error, conn) => {
		if (error) return res.send(error);

		const sql = "SELECT * FROM directorio";
		conn.query(sql, (error, results) => {
			if (error) return res.send(error);

			res.status(200).json({
				status: 200,
				data: results,
			});
		});
	});
};

export const getOne = (req, res) => {
	const { id } = req.params;
	req.getConnection((error, conn) => {
		if (error) return res.send(error);

		const sql = "SELECT * FROM directorio WHERE id = ?";
		conn.query(sql, [id], (error, results) => {
			if (error) return res.send(error);

			res.status(200).json({
				status: 200,
				data: results[0],
			});
		});
	});
};

export const create = (req, res) => {
	req.getConnection((error, conn) => {
		if (error) return res.send(error);

		const {
			nombres,
			ap_paterno,
			ap_materno,
			direccion,
			t_fijo,
			t_movil,
			email,
		} = req.body;
		const newRecord = {
			nombres,
			ap_paterno,
			ap_materno,
			direccion,
			t_fijo,
			t_movil,
			email,
		};

		const sql = "INSERT INTO directorio SET ?";
		conn.query(sql, [newRecord], (error, results) => {
			if (error) return res.send(error);

			res.send("New Record!!");
		});
	});
};

export const edit = (req, res) => {
	const { id } = req.params;
	req.getConnection((error, conn) => {
		if (error) return res.send(error);

		const {
			nombres,
			ap_paterno,
			ap_materno,
			direccion,
			t_fijo,
			t_movil,
			email,
		} = req.body;
		const newRecord = {
			nombres,
			ap_paterno,
			ap_materno,
			direccion,
			t_fijo,
			t_movil,
			email,
		};

		const sql = "UPDATE directorio SET ? WHERE id = ?";
		conn.query(sql, [newRecord, id], (error, results) => {
			if (error) return res.send(error);

			res.send("Record updated!!");
		});
	});
};

export const deleteOne = (req, res) => {
	const { id } = req.params;
	req.getConnection((error, conn) => {
		if (error) return res.send(error);

		const sql = `DELETE FROM directorio WHERE id = ${id}`;
		conn.query(sql, (error, results) => {
			if (error) return res.send(error);

			res.send("Record deleted!!");
		});
	});
};
