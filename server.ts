import express = require("express");


const PORT = process.env.PORT || 3000;
const app = express();
app.get('/', (req, res) => res.send('Meu backend já tá rodando na web (: \n\nSinuquinha na hora do almoço?'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));