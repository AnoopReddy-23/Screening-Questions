import { Router } from "express";

import {
  createToDo,
  getAllToDo,
  Login
} from "../controller/users";


const router = Router();

router.post("/create", createToDo);

router.get("/get-data", getAllToDo);

router.post("/login",Login)

export default router;