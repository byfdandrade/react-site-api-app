const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const home = new Schema({
    //Header
    topTitulo: { type: String },
    topSubTitulo: { type: String },
    topTextBtn: { type: String },
    topLinkBtn: { type: String },
    //Seviços
    tituloServico: { type: String },
    subTituloServico: { type: String },
    //Serviço One
    iconServicoOne: { type: String },
    tituloServicoOne: { type: String },
    descServicoOne: { type: String },
    //Serviço Two
    iconServicoTwo: { type: String },
    tituloServicoTwo: { type: String },
    descServicoTwo: { type: String },
    //Serviço Three
    iconServicoThree: { type: String },
    tituloServicoThree: { type: String },
    descServicoThree: { type: String },
}, {
    timestamps: true
});

mongoose.model('Home', home);