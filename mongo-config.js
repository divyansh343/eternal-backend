const  mongoose  = require("mongoose");

// mongo
const mongoConnect = () => {
    const Uri = `mongodb+srv://divyansh:amapirate@testcluster.ywjkt.mongodb.net/eternal?retryWrites=true&w=majority`

    mongoose.connect(Uri, { useNewUrlParser: true });
    var conn = mongoose.connection;
    conn.on('disconnected', function () {
        console.log('database is disconnected successfully');
    })
    conn.on('connected', function () {
        console.log('database is connected successfully');
    });
    conn.on('error', console.error.bind(console, 'connection error:'));
    //
}
module.exports = mongoConnect;

//
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://divyansh:<password>@testcluster.ywjkt.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
//