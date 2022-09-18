"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponses = exports.addResponse = void 0;
const answers_1 = require("../models/answers");
const addResponse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var responses = yield answers_1.Responses.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Response added successfully", data: responses });
});
exports.addResponse = addResponse;
const getResponses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allResponses = yield answers_1.Responses.findAll();
    //console.log(allTodos);
    return res
        .status(200)
        .json({ message: "Responses fetched successfully", data: allResponses });
});
exports.getResponses = getResponses;
