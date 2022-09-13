import { RequestHandler } from "express";

import { Responses } from "../models/answers";


export const addResponse: RequestHandler = async (req, res, next) => {
  var responses = await Responses.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Response added successfully", data: responses });
};

export const deleteresponse: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedResponse: Responses | null = await Responses.findByPk(id);
  await Responses.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Response deleted successfully", data: deletedResponse });
};

export const getResponses: RequestHandler = async (req, res, next) => {
  const allResponses: Responses[] = await Responses.findAll();
  //console.log(allTodos);
  return res
    .status(200)
    .json({ message: "Responses fetched successfully", data: allResponses });
};

export const getResponseById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const responses: Responses | null = await Responses.findByPk(id);
  return res
    .status(200)
    .json({ message: "Response fetched successfully", data: responses });
};

export const updateResponse: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Responses.update({ ...req.body }, { where: { id } });
  const updatedResponse: Responses | null = await Responses.findByPk(id);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedResponse });
};