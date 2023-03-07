const { MongoClient } = require("mongodb");

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }  
}




async function run() {
  try {
    const database = client.db("fruitsDB");
    const fruits = database.collection("fruits");
    // create an array of documents to insert
    const docs = [
      { name: "Apple", score: 8, review:"Great fruit" },
      { name: "Orange", score: 6, review:"Kinda sour" },
      { name: "Banana", score: 9, review: "Great stuff!" }
    ];
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };
    const result = await fruits.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}




run().catch(console.dir);

