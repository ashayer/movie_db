import jwt, { VerifyOptions } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET, (err: any, decodedToken: any) => {
      if (err) {
      } else {
        next();
      }
    });
  } else {
    console.log("asd");
  }
};
