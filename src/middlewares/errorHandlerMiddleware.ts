import { NextFunction, Request, Response } from "express";

export function errorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);

  return res.sendStatus(500);
}
