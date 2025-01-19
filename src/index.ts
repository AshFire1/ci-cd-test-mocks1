import express, { Application, Request,Response } from 'express';
import { primsaClient } from './db';
export const app:Application = express();
app.use(express.json());


app.post('/sum',async(req:Request,res:Response)=>{
    const a=req.body.a;
    const b=req.body.b;
    const answer=a+b;
    await primsaClient.request.create({
        data:{
            a:a,
            b:b,
            answer:answer,
            type:"Sum"
        }
        
    })
    res.json({answer})
})
primsaClient
