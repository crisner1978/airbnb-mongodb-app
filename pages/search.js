import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchCards from "../components/SearchCards";

const Search = () => {
  const router = useRouter();
  const [newData, setNewData] = useState([]);
  const { location, startDate, endDate, guests } = router.query;

  console.log(newData);

  const formatDate = (date) => format(new Date(date), "dd MMM yy");
  const range = `${formatDate(startDate)} to ${formatDate(endDate)}`;

  useEffect(async () => {
    if (location) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/find?term=${location}`
        )
          .then((response) => response.json())
          .then((data) => {
            setNewData(data);
            return () => response;
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [location]);

  return (
    <div>
      <Header range={`${location} | ${range} | ${guests} guests`} />
      <section className="flex-grow pt-14 px-6">
        <p className="text-xs">
          300+ Stays - {range} - for {guests} guests
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in {location}
        </h1>
        <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>
        <div className="flex-col">
          {newData.map(({ _id, images, name, address, review_scores, reviews, price }) => (
            <SearchCards
              key={_id}
              name={name}
              address={address.market}
              img={images.picture_url}
              review_scores={review_scores.review_scores_rating}
              location={address.country}
              reviews={reviews.length}
              price={price.$numberDecimal}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
