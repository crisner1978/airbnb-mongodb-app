import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_airbnb");

  const data = await db
    .collection("listingsAndReviews")
    .aggregate([
        {
          $search: {
            index: "default",
            text: {
              path: ["address.market","address.country", "address.country_code", "address.street", "address.suburb", "name", "images"],
              query: req.query.term,
            },
          },
        },
        {
          $limit: 10,
        },
    ])
    .toArray();
  res.json(data);
}

// // http://localhost:3000/api/find?term=brazil