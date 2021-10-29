import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";

const Header = ({ range }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
      setSearchInput('')
  }

  const handleSearch = () => {
      router.push({
          pathname: '/search',
          query: {
              location: searchInput,
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
              guests,
          }
      })
      setSearchInput('')
  }

  return (
    <header className={`sticky top-0 z-50 grid grid-cols-3 shadow-md py-4 px-5 md:px-10 lg:px-20 bg-white`}>
      <div onClick={()=> router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
        <input
          className="pl-5 bg-transparent outline-none flex-grow text-sm placeholder-black font-semibold focus:placeholder-transparent"
          type="text"
          value={searchInput}
          placeholder={range || "Start your search"}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end">
        <p className="text-black font-semibold hidden md:inline pl-3">
          Become a host
        </p>
        <GlobeAltIcon className="hidden md:inline-flex h-5 sm:cursor-pointer sm:text-gray-700" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full text-gray-500">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-3 mx-2">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              min={1}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500 mx-5 hover:bg-gray-100 hover:scale-105 transition transform ease-out duration-200 rounded-full p-2">Cancel</button>
            <button onClick={handleSearch} className="flex-grow text-red-400 mx-5 hover:bg-red-400 hover:text-white hover:scale-105 transition transform ease-out duration-200 rounded-full p-2">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
