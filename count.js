var test = require('assert')
var url = 'mongodb://localhost:27017/learnyoumongo'
var client = require('mongodb').MongoClient
var firstArg = process.argv[2]

client.connect(url, (err, db) => {
  test.equal(err, null)
  var collection = db.collection('parrots')
  collection.count({age: {$gt: +firstArg}}, (err, count) => {
    test.equal(err, null)
    console.log(count)
    db.close()
  })
})
