import { Request, Response, NextFunction } from "express";

// Reusable handler types
export type ExpressHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void>;

export type ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

// Extend Request to add custom properties (e.g. auth user)
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: "admin" | "user";
      };
    }
  }
}
