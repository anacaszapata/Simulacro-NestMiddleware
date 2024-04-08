import { NestMiddleware } from "@nestjs/common";

export class myMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        if( req.headers.user === "Ana"){
            next()
        
        }else{
            return res.status(403).json({message:"user not authorized"})
        }
    }
}