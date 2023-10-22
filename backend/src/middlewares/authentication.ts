import { Request, Response, NextFunction } from "express";
import { isTypedArray } from "util/types";
// import { IAuthRequest } from "../types/document.type";
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication Invalid");
  }

  const token = authHeaders.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = {
      userId: payload.id,
      name: payload.name,
    };

    res.locals.user = user;
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

module.exports = auth;
