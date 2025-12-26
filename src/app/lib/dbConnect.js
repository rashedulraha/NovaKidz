const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

// DEFIANT DB COLLECTION NAME HERE

export const collection = {
  products: "products",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cName) => {
  return client.db(dbName).collection(cName);
};
