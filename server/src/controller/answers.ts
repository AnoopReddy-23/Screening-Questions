import { RequestHandler } from "express";

import { Responses } from "../models/answers";

export const addResponse: RequestHandler = async (req, res, next) => {
  var responses = await Responses.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Response added successfully", data: responses });
};

export const getResponses: RequestHandler = async (req, res, next) => {
  const allResponses: Responses[] = await Responses.findAll();
  //console.log(allTodos);
  return res
    .status(200)
    .json({ message: "Responses fetched successfully", data: allResponses });
};

