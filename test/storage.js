var assert = require('assert');
var storage = require('../src/storage')
describe('Storage tests', function () {
  describe('#get()', function () {
    it('google', function () {
      let s = new storage.Storage();
      assert.equal(s.get('google'), 'https://www.google.com')
    });
    it('non-exist', function () {
      let s = new storage.Storage();
      assert.equal(s.get('lkjadlasdl'), null)
    });
  });
  describe('#set()', function () {
    it('dummy', function () {
      let s = new storage.Storage();
      s.set('aaa', 'bbb');
      assert.equal(s.get('aaa'), 'bbb')
    });
  });
});