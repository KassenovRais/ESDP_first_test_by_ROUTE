import { Router , Request ,Response } from "express";

const test:Router = Router()

test.get('' , (req:Request ,res:Response) => {
       console.log('FAQ');
       res.send('FAQ')
       
})

export default test