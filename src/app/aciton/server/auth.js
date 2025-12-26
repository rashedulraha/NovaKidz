"use server";

import { collection, dbConnect } from "@/app/lib/dbConnect";
import bcryptjs from "bcryptjs";

export const postUser = async (payload) => {
  // check payload
  const { name, email, password } = payload;
  // check user value to payload
  if ((!email, !password)) {
    return null;
  }

  //check user database

  const isExist = await dbConnect(collection.user).findOne({ email });
  if (isExist) {
    return null;
  }
  //create user
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcryptjs.hash(password, 10),
    role: "user",
    createAt: new Date(),
  };

  // insert user
  const result = await dbConnect(collection.user).insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId,
    };
  }
};
