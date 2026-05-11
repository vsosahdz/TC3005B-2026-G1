import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import { ClienteModel } from "../modelsNOSQL/Cliente";

export default class ClienteController extends AbstractController{
    //Singleton
    private static _instance:ClienteController;
    public static get instance():ClienteController{
        return this._instance || (this._instance = new this("Cliente"));
    }

    protected initRoutes(): void {
        this.router.get('/listarClientes',this.getListarClientes.bind(this));
        this.router.post('/crearCliente',this.postCrearCliente.bind(this));
    }

    private  async getListarClientes(req:Request,res:Response):Promise<void>{
        //READ
        try{
            const clientes= await  ClienteModel.find().sort({createdAt:-1});
            res.status(200).json(clientes);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
    private  async postCrearCliente(req:Request,res:Response):Promise<void>{
        //READ
        try{
            console.log(req.body);
            await  ClienteModel.create(req.body);
            res.status(200).json({mensaje:"Registro de cliente existoso"});
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
    
}