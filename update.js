var client = require('mongodb').MongoClient
var test = require('assert')
var url = 'mongodb://localhost:27017/' + process.argv[2]

client.connect(url, (err, db) => {
  test.equal(err, null)
  var collection = db.collection('users')
  collection.updateOne({username: 'tinatime'}, {$set: {age: 40}})
  db.close()
})
