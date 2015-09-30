var client = require('mongodb').MongoClient
var test = require('assert')
var url = 'mongodb://localhost:27017/' + process.argv[2]

client.connect(url, (err, db) => {
  test.equal(err, null)
  var collection = db.collection(process.argv[3])
  collection.deleteOne({_id: process.argv[4]}, (err) => {
    test.equal(err, null)
    db.close()
  })
})
