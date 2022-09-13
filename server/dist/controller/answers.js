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
exports.updateResponse = exports.getResponseById = exports.getResponses = exports.deleteresponse = exports.addResponse = void 0;
const answers_1 = require("../models/answers");
const addResponse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var responses = yield answers_1.Responses.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Response added successfully", data: responses });
});
exports.addResponse = addResponse;
const deleteresponse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedResponse = yield answers_1.Responses.findByPk(id);
    yield answers_1.Responses.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Response deleted successfully", data: deletedResponse });
});
exports.deleteresponse = deleteresponse;
const getResponses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allResponses = yield answers_1.Responses.findAll();
    //console.log(allTodos);
    return res
        .status(200)
        .json({ message: "Responses fetched successfully", data: allResponses });
});
exports.getResponses = getResponses;
const getResponseById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const responses = yield answers_1.Responses.findByPk(id);
    return res
        .status(200)
        .json({ message: "Response fetched successfully", data: responses });
});
exports.getResponseById = getResponseById;
const updateResponse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield answers_1.Responses.update(Object.assign({}, req.body), { where: { id } });
    const updatedResponse = yield answers_1.Responses.findByPk(id);
    return res
        .status(200)
        .json({ message: "Todo updated successfully", data: updatedResponse });
});
exports.updateResponse = updateResponse;
