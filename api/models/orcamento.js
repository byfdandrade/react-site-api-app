const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orcamento = new Schema({
    //Header
    topTitulo: { type: String },
    topSubTitulo: { type: String },
    topTextBtn: { type: String },
    topLinkBtn: { type: String },
    //Form
    name: { type: String },
    email: { type: String },
    telefone: { type: String },
    projeto: { type: String },
}, {
    timestamps: true
});

mongoose.model('Orcamento', orcamento);