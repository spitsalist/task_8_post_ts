import  { Router }  from "express";
import {postData, getMsg} from '../controller/Data'
export const router = Router()

router.get('/', getMsg)

router.post('/data', postData)