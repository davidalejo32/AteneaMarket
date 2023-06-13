// Archivo principal del programa

import express, { Application, NextFunction, Request, Response } from 'express';
import rutas__ejemplos from './routes/rutas_ejemplos';


const app: Application = express();

app.use('/', rutas__ejemplos);


// respuesta cuando la ruta no existe
app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404);
    res.json({message:'Upss. El recurso no existe'});
});

// respuesta cuando existe un error del servidor

app.use((error:Error, req:Request, res:Response, next:NextFunction )=>{
    res.status(500);
    console.log(error);
    res.json({message: 'Houston tenemos un problema!!!'});
});


export default app;