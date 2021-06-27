import { Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
    const { sub } = verify( 
        token, 
        "4f93ac9d10cb751b8c9c646bc9dbccb9"
        ) as IPayload;
    
    request.user_id = sub;

    return next();
    } catch (err) {
        return response.status(401).end();
    }
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pdGFlbEBuaXRhZWwuY29tIiwiaWF0IjoxNjI0ODIwODA4LCJleHAiOjE2MjQ5MDcyMDgsInN1YiI6IjRiY2ZjM2I4LTM4NmYtNGM2Ny1iMTAzLThmODFkMjEyODhlZSJ9.ZVljZ9Fw20T68PfUM8glC_L7kQRlhaRNjItRYvsF9K4
}