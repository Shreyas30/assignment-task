import  Express  from "express";
const router = Express.Router();
import {getData, getDataBySearch} from "../controllers/data.js";

router.get("/", getData);
router.get("/search", getDataBySearch);

export default router;