import  { Request, Response }  from "express";

export const getMsg = (req:Request, res:Response) => {
    res.send('Welcome')
}

export const postData = (req:Request, res:Response) => {
    try{
        const getData = req.body
        res.json({message: 'Data recived succesfully', data: getData})
    }catch(error){
        res.status(500).json({message: 'Internal server error', error})
    }
}