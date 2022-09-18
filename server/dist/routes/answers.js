"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const answers_1 = require("../controller/answers");
const router = (0, express_1.Router)();
router.post("/create", answers_1.addResponse);
router.get("/get-data", answers_1.getResponses);
exports.default = router;
