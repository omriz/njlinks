// The main core of the redirector logic.
let storage = {};
function redirect(req, res) {
    let key = req.url.substring(1)
    if (key in storage) {
        res.writeHead(302, { location: storage[key] });
        res.end()
    } else {
        res.writeHead(200, { "Content-Type": "text/text" });
        res.write(`Key "${key}" not found in storage`);
        res.end();
    }
}

function redirector_init() {
    storage['google'] = 'https://www.google.com';
}

redirector_init()
exports.redirect = redirect