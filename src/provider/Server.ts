import express,{Request, Response} from 'express';

class Server{
    //Atributos de instancia
    private app: express.Application;
    private port: number;
    private env:string;

    //Método constructor
    constructor(appInit:{port:number; env:string; middlewares:any[]; controllers: any[]}){
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.initMiddlewares(appInit.middlewares);
        this.initControllers(appInit.controllers);
        this.connecDB();
    }

    private initMiddlewares(middlewares:any[]): void{
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    } 
    private initControllers(controllers: any[]): void{
        //   http://IP:PORT/ 
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Server is working 🚀');
        })
        controllers.forEach(controller => {
            this.app.use(controller);
        });
    }
    private async connecDB(){
        //TO DO
    }

    public init(): void{
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }

}

export default Server;