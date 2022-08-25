import express from "express";
const router = express.Router();

// Controller
import {
	getAll,
	getOne,
	create,
	edit,
	deleteOne,
} from "../controllers/agendaController.js";

router.route("/").get(getAll).post(create);

router.route("/:id").get(getOne).put(edit).delete(deleteOne);

export default router;
