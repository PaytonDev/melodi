import jwt from "jsonwebtoken";
import prisma from "./prisma";
import { NextApiRequest, NextApiResponse } from "next";

export const validateRoute = (handler) => async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.cookies.MELODI_ACCESS_TOKEN;

  if (token) {
    let user;

    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      user = await prisma.user.findUnique({ where: { id: id } });

      if (!user) {
        throw new Error("User not found");
      }
    } catch (error) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }
    return handler(req, res, user);
  }
  res.status(401).json({ error: "Not authenticated" });
};
