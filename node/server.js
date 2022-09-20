import express from 'express';
import * as querys from './repository/PeopleRepository.js';

const app = express()
const port = 3000


let nomes = querys.findAllPersons();

app.get('/', (req, res) => {
    querys.createPersona();
    res.send(`<h1>Full Cycle Rocks!</h1> <p>${nomes.toString()}</p>`)
})

app.get('/hello', (req, res) => {
    res.send(`<h1>Olá Mundo!</h1>`)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})