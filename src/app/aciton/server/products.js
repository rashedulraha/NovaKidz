import { collection, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await dbConnect(collection.products).find().toArray();

  return products.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));
};

//  get product details page data

export const getProductsDetails = async (id) => {
  //  checking validation
  if (!id.length === 24) {
    return {};
  }
  //  convert string to object id
  const objectId = { _id: new ObjectId(id) };

  //  find data to database
  const result = await dbConnect(collection.products).find(objectId).toArray();
  // return data
  return result.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));
};
