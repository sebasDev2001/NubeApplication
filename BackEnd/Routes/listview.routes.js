import { Router } from 'express';
import path from 'path'


const ListView = Router();

ListView.get('/listview', function(req,res){
    res.sendFile(path.resolve('../BackEnd/Pages/ListView.html'))
})

export default ListView