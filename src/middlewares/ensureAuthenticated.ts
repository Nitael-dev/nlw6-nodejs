import { Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken"

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authtoken = request.headers.authorization;

    if(!authtoken) {
        return response.status(401).end();
    }

    const [] = authtoken.split(" ")

    // verify( token , "4f93ac9d10cb751b8c9c646bc9dbccb9")

    return next();
}