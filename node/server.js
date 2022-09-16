const http = require("http")
const port = process.env.PORT || 3000;

const rotas = {
    '/': 'Full Cycle 3.0'
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})