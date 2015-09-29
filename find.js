var assert = require('assert')
var url = 'mongodb://localhost:27017/learnyoumongo'
var client = require('mongodb').MongoClient
var firstArg = +process.argv[2]

client.connect(url, (err, db) => {
  assert.equal(err, null)
  db.collection('parrots').find({age: {$gt: firstArg}}).toArray((err, docs) => {
    assert.equal(err, null)
    console.log(docs)
    // db.close()  // this call should be made here, read the comment below
  })
  // never close the db here, since the above method calls to db are asynchronous
  // and you may close the db connection before the above method calls are over
})
