const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

// MongoDB connection string for local MongoDB instance
const mongoURL = "mongodb://127.0.0.1:27017";

// Database and collection names
const dbName = "sampleDB";
const collectionName = "sampleCollection";

// Middleware to parse JSON
app.use(express.json());

// Function to connect to MongoDB
async function connectToMongoDB() {
  const client = new MongoClient(mongoURL);
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB successfully");

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert a sample document
    const sampleData = { name: "John Doe", age: 30, profession: "Developer" };
    const result = await collection.insertOne(sampleData);
    console.log("Sample document inserted with ID:", result.insertedId);

    return client; // Return client for future operations
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Define a route
app.get("/", (req, res) => {
  res.send("MongoDB Local Connection Example");
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  const client = await connectToMongoDB();
  if (client) {
    console.log("Database setup completed");
    client.close(); // Close the connection after the setup
  }
});
