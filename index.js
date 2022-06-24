const http = require('http');
const mux = require('./src/mux')
const server = http.createServer(mux)

const port = process.env.PORT || 7865;
server.listen(port, () => {
    console.log(`Server running on: ${port}`);
})