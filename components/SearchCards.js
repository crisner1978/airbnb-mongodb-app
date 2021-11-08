import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import React from "react";

const SearchCards = ({
  id,
  img,
  name,
  address,
  location,
  review_scores,
  reviews,
  price,
}) => {
  return (
    <Link href={`/listing/[id]`} as={`/listing/id=${id}`}>
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between ">
          <p className="text-gray-500">
            {address} - {location}
          </p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-lg">{name}</h4>
        <div className="border-red-400 border-b w-10  pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{name}</p>

        <div className="flex justify-between ">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {review_scores} 
            <span className="text-gray-500 text-sm pl-1"> ({reviews} reviews)</span>
          </p>
          <div>
            <br />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold pb-2">
              {price} / night
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SearchCards;
