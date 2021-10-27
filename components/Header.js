import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'


const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 lg:px-20">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" 
                    layout="fill"
                    objectFit="contain" objectPosition="left"
                    />
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm"> 
                <input className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-black font-semibold" type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
            </div>
            <div className="flex space-x-4 items-center justify-end">
                <p className="text-black font-semibold hidden md:inline pl-3">Become a host</p>
                <GlobeAltIcon className="h-5 cursor-pointer text-gray-700" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full text-gray-500">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header
