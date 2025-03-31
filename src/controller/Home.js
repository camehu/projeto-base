// import repository from '../repository/projeto_base.js'


const Home = {
    index(req,res){
        res.json("Olá Mundo - Orçamento Domestico ou contas - Projeto Base");
    },


    // list(req, res, next){
    //     repository.list()
    //     .then(result=>Response.json(result))
    //     .cath(next)
    // },

    byId(req, res, next){   },
    create(req, res, next){   },
    updById(req, res, next){   },
    delById(req, res, next){   },

    
}

export default Home 