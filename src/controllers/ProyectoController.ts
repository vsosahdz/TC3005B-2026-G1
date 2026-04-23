import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

export default class ProyectoController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance:ProyectoController;
    //Métodos de clase
    public static get instance():ProyectoController{
        return this._instance || (this._instance = new this("Proyecto"));
    }

    //Métodos de instancia
    protected initRoutes():void{
        //SELECT
        this.router.get('/listarProyectos',this.getListarProyectos.bind(this));
        //CREATE
        this.router.post('/crearProyecto',this.postCrearProyecto.bind(this));
    }

    private async getListarProyectos(req:Request,res:Response){
        try{
            const proyectos = await db.Proyecto.findAll();
            res.status(200).json(proyectos);
        }catch(err){
            console.log(err);
            res.status(500).json({mensaje:err});
        }
        
    }
    private async postCrearProyecto(req:Request,res:Response){
        try{
            console.log(req.body);
            await db['Proyecto']. create(req.body);
            res.status(200).json({mensaje:"Proyecto creado exitosamente"});
        }catch(err){
            console.log(err);
            res.status(500).json({mensaje:err});
        }
    }
    
}