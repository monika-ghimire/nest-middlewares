import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request , Response } from "express";


@Injectable()
export class BookMiddleware  implements NestMiddleware{
use(req: Request, res: Response, next: NextFunction) {
    // throw new Error("Method not implemented.");
    let protocol = req.protocol; //http or https
    let host = req.get('host'); //localhost:3000
    let url = req.originalUrl; // /book/all
    let method = req.method; //GET or POST
    let headers = req.headers; // all headers
    let date = new Date().toString // current date
    console.log('this is middleware book single')
    console.log('protocol:', protocol);
    console.log('host:', host);
    console.log('url:', url);
    console.log('method:', method);
    console.log('headers:', headers);
    console.log('date:', date);
    next();
}

}