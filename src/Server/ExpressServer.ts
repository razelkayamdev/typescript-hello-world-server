import * as express from 'express';
import { Application, Response, Request } from 'express';
import { Server } from 'http';

export class ExpressServer {
    
    private app: Application
    private port: number
    private server: Server | undefined

    constructor(port: number) {
        this.app = express();
        this.app.use(express.json());
        this.port = port;
    }

    public listen() {
        this.server = this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })

        this.app.get('/health', (req: Request, res: Response) => {
            res.sendStatus(200);
            console.log(`Served user-agent: ${req.get('user-agent')}`);
        });

        this.app.post('/', (req: Request, res: Response) => {
            console.log(`JSON from request: ${JSON.stringify(req.body)}`);
            res.json({"JSON" : req.body});
        });
    }
}