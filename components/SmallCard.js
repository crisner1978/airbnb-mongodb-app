import React from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

const SmallCard = ({ img, name, address, id }) => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };
  return (
    <Link href={`/listing/[id]`} as={`/listing/id=${id}`}>
      <div className="flex items-center m-2 mt=5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform ease-out duration-200">
        <div className="relative h-16 w-16">
          <Image src={img} layout="fill" className="rounded-lg" />
        </div>
        <div>
          <h1 className="font-semibold">{address}</h1>
          <h3 className="text-gray-500">{truncate(name, 15)}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SmallCard;
