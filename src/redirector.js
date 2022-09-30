// The main core of the redirector logic.
const store = require('./storage');
function Redirector() {
    // Storage initialization.
    this.storage = new store.Storage();
}

Redirector.prototype.handle = function (req,res) {
    if (req.method === "GET") {
        this.redirect(req,res)
    } else {
        res.writeHead(500, { "Content-Type": "text/text" });
        res.write(`None GET request unimplemnted`);
        res.end();
    }
}

Redirector.prototype.redirect = function (req, res) {
    let key = req.url.substring(1)
    let v = this.storage.get(key)
    if (Object.is(v, null)) {
        res.writeHead(404, { "Content-Type": "text/text" });
        res.write(`Key "${key}" not found in storage`);
        res.end();
    } else {
        res.writeHead(302, { location: v });
        res.end()
    }
}

module.exports = {
    Redirector: Redirector
}