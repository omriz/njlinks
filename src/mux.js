// Main http routing controller.
const redirector = require('./redirector')
async function controller(req, res) {
    if (req.url === "/healthz" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/text" });
        res.write("ok");
        res.end();
    } else {
        redirector.redirect(req,res);
    }
}

exports.controller = controller