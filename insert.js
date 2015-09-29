var assert = require('assert')
var url = 'mongodb://localhost:27017/learnyoumongo'
var client = require('mongodb').MongoClient

var doc = {
  firstName: process.argv[2],
  lastName: process.argv[3]
}
client.connect(url, (err, db) => {
  assert.equal(err, null)
  var docs = db.collection('docs')
  docs.insertOne(doc, (err, result) => {
    assert.equal(err, null)
    console.log(JSON.stringify(doc))
    db.close()
  })
})
