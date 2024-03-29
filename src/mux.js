// Main http routing controller.
const redirector = require('./redirector');
const Redirector = new redirector.Redirector();

async function mux(req, res) {
    if (req.url === "/healthz" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/text" });
        res.write("ok");
        res.end();
    } else {
        Redirector.handle(req,res);
    }
}

module.exports = mux