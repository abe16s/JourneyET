"use client"
import { useRouter } from "next/navigation";

const Header =() =>{
    const router = useRouter();
    return (
        <>
        <div className="header-component flex flex-col md:flex-row w-full bg-[#FFEDDB] gap-2 md:gap-5 h-auto md:h-28 mb-16 ">

            <div className="w-full md:w-3/12 flex items-center md:justify-end">
            <img src="axum-logo_yellow.svg" className="h-12 w-16 mr-1 " />
            <span className="text-3xl font-extrabold font-poppins cursor-pointer" onClick={() => router.push('/')}>JourneyET</span>
            </div>

            <div className="w-full md:w-6/12 flex items-center px-4 md:px-1 justify-center">

            <div className="relative w-full md:max-w-xs lg:max-w-2xl">
                <span className="absolute left-4 top-1 transition-transform duration-200 transform group-focus-within:-translate-y-1 group-focus-within:scale-105">
                    <img src="location-icon.svg" alt="Location icon" className="h-8 w-8" />
                </span>

                <input type="text" placeholder="Where to Visit?"
                className="w-full pl-16 pr-10 py-2 rounded-3xl bg-white border border-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-50" />
                <span className="absolute right-3 top-1 transition-transform duration-200 transform group-focus-within:-translate-y-1 group-focus-within:scale-105">
                    <img src="search-icon.svg" alt="search icon" className="h-8 w-8" />
                
                </span>
            </div>
            </div>


            <div className="w-full md:w-3/12 flex flex-col md:flex-row items-center md:justify-end md:mr-16 space-y-2 md:space-y-0 lg:mr-28 md:space-x-6">
            <button className="text-md font-bold text-black whitespace-nowrap hover:text-gray-500" onClick={() => router.push('/')}>Home</button>
            <button className="text-md font-bold text-black whitespace-nowrap hover:text-gray-500" onClick={() => router.push('/')}>Destinations</button>
            <button className="text-md font-bold text-black whitespace-nowrap hover:text-gray-500" onClick={() => router.push('/')}>About</button>
            <button className=" text-sm lg:text-lg font-bold bg-[#D6C835] whitespace-nowrap text-white rounded px-2 py-1 lg:py-2 hover:text-gray-200" onClick={()=>{}}>Sign Up</button>
            </div>




        </div>
        </>
    )
}
export default Header;