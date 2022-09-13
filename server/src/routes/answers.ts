import { Router } from "express";

import {
  addResponse,
  deleteresponse,
  getResponses,
  updateResponse,
  getResponseById,
} from "../controller/answers";


const router = Router();

router.post("/create", addResponse);

router.get("/get-data", deleteresponse);

router.get("/:id", getResponses);

router.put("/:id", updateResponse);

router.delete("/:id", getResponseById);

export default router;