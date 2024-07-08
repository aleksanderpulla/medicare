import * as sdk from "node-appwrite";

// export const {
//   PROJECT_ID,
//   API_KEY,
//   DATABASE_ID,
//   PATIENT_COLLECTION_ID,
//   DOCTOR_COLLECTION_ID,
//   APPOINTMENT_COLLECTION_ID,
//   NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
//   NEXT_PUBLIC_ENDPOINT,
// } = process.env;

const client = new sdk.Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
  .setProject("668ac4ce00175289e55c")
  .setKey(
    "b7a53fffc1aabd4a87d206c94222f4c4b25abc99bb8761d794b00df165f0f4f56b5132979c172da86800b828ceb91643a31dc100402769a36feda44579c1b5d26f8d13f4e98c326a69ff4af8a0a3bb26ae21969a00c5bf071dfb1a8000b5c0a3aa6570aaf6447e12d4604215cb7701930db923383db08022f9e4f7dffaed6b55"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
