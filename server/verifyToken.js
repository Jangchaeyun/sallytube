import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
     const token = req.cookies.access_token;
     if (!token) return next(createError(401, "인증되지 않았습니다!"))

     jwt.verify(token, process.env.JWT, (err, user) => {
          if (err) return next(createError(403, "토큰이 유효하지 않습니다!"))
          req.user = user;
          next()
     })
}