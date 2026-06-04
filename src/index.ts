import {PORT,NODE_ENV} from './config';
import Server from './provider/Server';
import express from 'express';
import cors from 'cors';
//Importar controllers
import ProyectoController from './controllers/ProyectoController';
import ClienteController from './controllers/ClienteController';
import UsuarioController from './controllers/UsuarioController';

const server:Server = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true}),
        cors()
    ],
    controllers:[
        ProyectoController.instance,
        ClienteController.instance,
        UsuarioController.instance
    ]
})

//Extendiendo la interfaz Request de Express para poder acceder a los datos del usuario
declare global {
    namespace Express {
        interface Request {
            user: string;
            token: string;
        }
    }
}

server.init();
