const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {

    const client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017');
    database = client.db('online-shop');
}

function getDb(){
    if(!database){
        throw new Error('You must connect first!');
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
}
