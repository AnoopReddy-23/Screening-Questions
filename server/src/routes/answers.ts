import { Router } from "express";

import {
  addResponse,
  getResponses
} from "../controller/answers";


const router = Router();

router.post("/create", addResponse);

router.get("/get-data", getResponses);

export default router;