import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_airbnb");

  const cardData = await db
    .collection("listingsAndReviews")
    .find({ "address.country_code": "AU" })
    .limit(4)
    .toArray();


  res.json(cardData);
}
