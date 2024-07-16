"use client"

import { useRouter } from "next/navigation";


export default function HotelCard(){
  const router = useRouter();
  return(
    <>
      <button  onClick={() => router.push("/hotel")}>
        <div className = "w-[303px] h-[356px] flex flex-col items-start" >
          <div className="w-full h-[246px] object-cover">
            <img src="Hotel-1.jpeg" className="w-full h-full rounded-2xl "></img>
          </div>
          <div className="font-medium text-[16px]">Haile resorts</div>
          <div className="font-medium text-[10px]">A 5 star hotel near hawassa with a wide range of services</div>
          <div className="flex flex-row items-baseline gap-2">
            <div className="flex gap-2 mt-2 ">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
              </div>
            <div> 4.5 </div>
          </div>
          <div className="text-[10px]">Price per night: <span className="font-bold text-sm">$32.87</span> </div>
          </div>  
      </button>
      
    </>
  );
}