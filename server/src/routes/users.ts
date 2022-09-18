import { Router } from "express";

import {
  createToDo,
  getAllToDo,
} from "../controller/users";


const router = Router();

router.post("/create", createToDo);

router.get("/get-data", getAllToDo);

export default router;