const db = require("./bd.js")
const Schema = db.Schema;
const livroSchema = new Schema({
    nome: {
        type: String,
        required: [true, "informe um nome"],
    },
    qdtPaginas: {
        type: Number,
    }
})

const Livro = db.model("livro", livroSchema)


Livro.create({
    nome: "teste aaaaaaaaaaaaaaa",
    qdtPaginas: 9999
})