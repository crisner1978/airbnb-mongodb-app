import React from "react";
import Image from "next/dist/client/image";

const LargeCard = ({ img, name, buttonText, summary, text = false }) => {
  return (
    <section className="relative py-16 cursor-default">
      <div className="relative h-96 min-w-[300px]">
        <Image
          placeholedr="blur"
          priority
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3
          className={`text-3xl mb-3 w-64 ${
            text
              ? "text-red-400 font-semibold bg-white bg-opacity-80 px-4 py-2 rounded-2xl "
              : "text-black"
          } `}
        >
          {name}
        </h3>
        <p className={`pr-10 ${text && "text-white font-semibold"}`}>
          {summary}
        </p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:shadow-xl active:scale-90 transition duration-200">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
