import express  from "express";
import { getEvent, createEvent } from "../controllers/eventControllers";

const router = express.Router();

router.get("/", getEvent);
router.post("/", createEvent);

export default router;
