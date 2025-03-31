import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../src/routes/index.js'
import AppController from './controller/App.js';

const app = express();

app.use(cors()); // Permite todas as origens
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(routes);
app.use(AppController.notFound);
app.use(AppController.handleError);

app.use((req,res,next)=>{
    res.header('Acces-Control-Allow-Origin','*');
    res.header('Acces-Control-Allow-Headers','Origin, X-Requested-With,Content-Type, Accept');
})

app.use((req, res, next)=>{
   if(req.url === '/favicon.ico'){
    res;writeHead(200,{'Content-type': 'image/x-icon'})
   }else{
        next()
   }
})

app.use((req, res, next)=>{
    const err= new Error('Pagina inexistente')
    err.status=404;
})

app.use((eer, req, res, next)=>{
    if(eer.status !=404){
        console.log(err.stack)
        res.status(err.status || 500).json({eer:err.message})
    }
});

// app.listen(3000)

export default app


