"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controller/users");
const router = (0, express_1.Router)();
router.post("/create", users_1.createToDo);
router.get("/get-data", users_1.getAllToDo);
exports.default = router;
