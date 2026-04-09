import { Request,Response } from "express";
import AbstractController from "./AbstractController";

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
        this.router.get('/listarProyectos',this.getListarProyectos.bind(this));
        this.router.post('/crearProyecto',this.postCrearProyecto.bind(this));
    }

    private getListarProyectos(req:Request,res:Response){
        console.log("Ruta consumida /listarProyectos");
        res.status(200).send("<h1>Ruta consumida</h1>");
    }
    private postCrearProyecto(req:Request,res:Response){
        console.log("Ruta consumida /crearProyecto");
        res.status(200).json({mensaje:'Ruta consumida'});
    }
    
}