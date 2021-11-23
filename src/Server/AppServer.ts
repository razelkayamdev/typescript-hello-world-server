import { ExpressServer } from "./ExpressServer";

export class AppServer {

    private experssServer: ExpressServer;

    constructor() {
        this.experssServer = new ExpressServer(8000);
    }

    public createServer() {
        this.experssServer.listen();
        console.log('Server started');
    }
}