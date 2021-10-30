import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

const MediumCard = ({ img, name, id }) => {
  return (
    <Link href={`/listing/[id]`} as={`/listing/id=${id}`}>
      <div className="cursor-pointer hover:scale-105 transform transition duration-150 ease-out my-5">
          <div className="relative h-80 w-80">
            <Image src={img} layout="fill" className="rounded-xl" />
          </div>
        <h1 className="text-xl font-semibold mt-3">{name}</h1>
      </div>
    </Link>
  );
};

export default MediumCard;
