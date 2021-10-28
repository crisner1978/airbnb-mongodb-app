import Head from "next/head";
import clientPromise from "../lib/mongodb";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import { useEffect, useState } from "react";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";


export default function Home({ places }) {
  const [cardData, setCardData] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/api/cardData")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
        return () => response;
      });
  }, []);

  return (
    <div className="">
      <Head>
        <title>RISE Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">City to Beach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {places.map(({ _id, image, name, address }) => (
              <SmallCard key={_id} img={image} name={name} address={address} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold pt-8 pb-3">Live Outback</h2>
          <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map(({ _id, images, name }) => (
              <MediumCard key={_id} img={images.picture_url} name={name} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          name="The Great Outdoors"
          buttonText="Get Inspired"
          summary="Wishlists curated by Airbnb"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("sample_airbnb");

  const data = await db
    .collection("listingsAndReviews")
    .find({ "address.country_code": "US", property_type: "House" })
    .limit(8)
    .toArray();
  const properties = JSON.parse(JSON.stringify(data));
  const places = properties.map((property) => {
    const price = JSON.parse(JSON.stringify(property.price));
    return {
      _id: property._id,
      name: property.name,
      image: property.images.picture_url,
      address: property.address.market,
      summary: property.summary,
      price: price.$numberDecimal,
    };
  });
  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  return {
    props: { places },
  };
}
