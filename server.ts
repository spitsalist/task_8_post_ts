import express from "express";
import {router} from './router/postRouter'

const port = 4001
const app = express()
app.use(express.json())
app.use('/', router)


const start = () => {
    try{
        app.listen(port,()=> console.log(`Server is running on port ${port}`))
    }catch(error){
    }
}
start()