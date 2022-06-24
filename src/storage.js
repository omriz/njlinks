function Storage() {
    this['google'] = 'https://www.google.com'
}

Storage.prototype.get = function (key) {
    if (key in this) {
        return this[key];
    } else {
        return null;
    }
}

Storage.prototype.set = function (key, value) {
    this[key] = value;
}

module.exports = {
    Storage: Storage
}