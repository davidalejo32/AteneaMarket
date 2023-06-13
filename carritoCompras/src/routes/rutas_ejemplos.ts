import express, { Request, Response, Router } from 'express';

const router:Router = Router();

router.get('/', (req:Request, res:Response)=>{
    res.send('hola plantilla ts!!');
});

router.get('/message/:msg', (req:Request, res:Response)=>{

    const myVar = req.params.msg;
    res.send(`Hola ${myVar}`);
});

export default router;