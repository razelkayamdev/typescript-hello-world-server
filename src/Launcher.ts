import { AppServer } from "./Server/AppServer";

class Launcher {

    private server: AppServer

    constructor() {
        this.server = new AppServer();
    }

    public launchApp() {
        console.log('Started app');
        this.server.createServer();
    }
}

new Launcher().launchApp();