const mongoose = require("mongoose")
const conectMongo = "mongodb+srv://ghvaz:men1go23@cluster0.fshq8.mongodb.net/aluguel"

async function main() {
    await mongoose.connect(conectMongo)
}

main()
.then(() => console.log("foi caralho, to vendo o banco"))
.catch(naoDeu => console.log(naoDeu))

module.exports = mongoose