import clientPromise from "../../lib/mongodb"




export default async function handler(req, res){
    const query = req.query.id

    const client = await clientPromise
    const db = client.db("sample_airbnb")

    const data = await db.collection("listingsAndReviews").findOne({_id: query});
    

    res.status(200).json(data)

}