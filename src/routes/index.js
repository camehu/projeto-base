import { Router } from 'express';
import Home from '../controller/Home.js'


const routes = new Router();


routes.get('/', Home.index);

routes.get('/favicon.ico',(req, res, next)=>{ 
     res.writeHead(200,{'Content-type': 'image/x-icon'});
     res.end('');    
 });



export default routes