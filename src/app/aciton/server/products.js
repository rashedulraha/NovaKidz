import { collection, dbConnect } from "@/app/lib/dbConnect";

export const getProducts = async () => {
  const products = await dbConnect(collection.products).find().toArray();

  return products.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));
};
