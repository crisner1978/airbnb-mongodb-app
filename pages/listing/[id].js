import { HeartIcon, StarIcon } from "@heroicons/react/outline";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LargeCard from "../../components/LargeCard";
import SearchCards from "../../components/SearchCards";

const Listing = ({ property }) => {
  //   useEffect(async () => {
  //     const request = await fetch(
  //       `http://localhost:3000/api/property?listing_id=10021707`
  //     )
  //       .then((request) => request.json())
  //       .then((data) => {
  //         setListing(data);
  //         return () => request;
  //       });
  //   }, []);
  //   console.log(listing)

  return (
    <div>
      <Header />
      {property && (
        <main className="max-w-7xl mx-auto px-8 pb-16 sm:px-16">
          <LargeCard
            text
            img={property.images.picture_url}
            name={property.name}
            summary={property.address.market}
            buttonText="Book Now"
          />{" "}
          <section>
            <div className="-mt-10">
              <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between ">
                  <p className="text-gray-500">
                    {property.address.market} - {property.address.country}
                  </p>
                  <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-lg mr-14">{property.summary}</h4>
                <div className="border-red-400 border-b w-10  pt-2" />

                <div className="flex justify-between ">
                  <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400" />{" "}
                    {property.review_scores.review_scores_rating}
                    <span className="text-gray-500 text-sm pl-1">
                      {" "}
                      ({property.reviews.length} reviews)
                    </span>
                  </p>
                  <div>
                    <br />
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold pb-2">
                      {property.price.$numberDecimal} / night
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Listing;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `https://airbnb-mongodb-app.vercel.app/api/property?${params.id}`
  );
  const property = await data.json();

  console.log(params.id);

  return {
    props: { property },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const data = await fetch(
//     `http://localhost:3000/api/property?${context.query.listing_id}`
//   );
//   const property = await data.json();

//   console.log(property);

//   return {
//     props: { property },
//   };
// }

// export async function getStaticPaths() {

//     return {
//         paths: [],
//         fallback: true
//     }
// }
