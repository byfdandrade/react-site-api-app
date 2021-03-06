const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('./models/home');
const Home = mongoose.model('Home');
require('./models/orcamento');
const Orcamento = mongoose.model('Orcamento');
const app = express();
app.use(express.json());


//Cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost:27017/api_react', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((error) => {
    console.log("Erro ao se conectar com o MongoDB!");
});




app.get('/', async (req, res) => {
    await Home.findOne({}).then((home) => {
        return res.json({
            error: false,
            home: home
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: 'Nenhum registro encontrado no BD'
        });
    });

});

app.post('/home', async (req, res) => {
    const dados = {
        "topTitulo": "Temos a solução que a sua empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "Orçamento",
        "topLinkBtn": "http://localhost:3000/orcamento",
        //Seviços
        "tituloServico": "Serviços",
        "subTituloServico": "Featured content or information",
        //Serviço One
        "iconServicoOne": "laptop-code",
        "tituloServicoOne": "Serviço um",
        "descServicoOne": "Praesent quis sagittis libero, nec suscipit neque. Quisque ut ultrices lectus, sit amet sollicitudin mauris.",
        //Serviço Two
        "iconServicoTwo": "mobile-alt",
        "tituloServicoTwo": "Serviço dois",
        "descServicoTwo": "Nullam rutrum imperdiet nisi, eget facilisis elit consectetur accumsan lectus, sit amet sollicdin efficitur.",
        //Serviço Three
        "iconServicoThree": "network-wired",
        "tituloServicoThree": "Serviço tres",
        "descServicoThree": "Quisque elementum suscipit dolor, sed lobortis nibh. Curabitur et dui iaculis, consectetur enim vitae purus.",

    }

    const homeExiste = await Home.findOne({});
    if (homeExiste) {
        return res.status(400).json({
            error: true,
            message: "Erro: A página home já possui um registro!"
        });
    }

    await Home.create(dados, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo não cadastrado!"
        });
    });

    return res.json({
        error: false,
        message: "Cadastrado com Sucesso!"
    });
});


app.post('/orcamento', async (req, res) => {

    await Orcamento.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo não cadastrado!"
        });
    });

    return res.json({
        error: false,
        message: "Orçamento cadastrado com Sucesso!"
    });
});


app.get('/teste', function (req, res) {
    res.send('Hello World')
})


app.listen();
