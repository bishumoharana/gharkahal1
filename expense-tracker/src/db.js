const { MongoClient } = require('mongodb');

// Replace the connection string with your MongoDB Atlas connection string
const uri = 'mongodb+srv://bimmercap:anahya18@clustercaptured.c7jp0o4.mongodb.net/omcalculus?retryWrites=true&w=majority';

async function connect() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db();
  } catch (error) {
    console.log('Error connecting to the database', error);
    throw error;
  }
}

module.exports = connect;
