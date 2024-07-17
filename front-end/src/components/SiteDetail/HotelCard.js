"use client"

import { useRouter } from "next/navigation";


export default function HotelCard({index}){
  const router = useRouter();
  const hotelData = [
    {
      hotelName: "Wonderland",
      hotelImage: "Hotel-1.jpeg",
      hotelDescription: "#1 Best Value of 20 places to stay in Harar",
      rating: {
        stars : 4,
        quantity: 109
      },
      priceCents: 3287
    },
    // next data
    {
      hotelName: "Winta Hotel",
      hotelImage: "Hotel-2.jpeg",
      hotelDescription: "praised for its helpful staff",
      rating: {
        stars : 4,
        quantity: 100
      },
      priceCents: 3589
    },
    {
      hotelName: "Sumeya Hotel",
      hotelImage: "Hotel-3.jpeg",
      hotelDescription: "A stone throw away from the magical jegol wall",
      rating: {
        stars : 4.5,
        quantity: 34
      },
      priceCents: 3989
    },
    {
      hotelName: "Harar Ras Hotel",
      hotelImage: "Hotel-4.jpg",
      hotelDescription: "Great for couples :)",
      rating: {
        stars : 3,
        quantity: 106
      },
      priceCents: 3089
    },
  ];
  return(
    <>
      <button  onClick={() => router.push("/hotel")}>
        <div className = "w-[303px] h-[356px] flex flex-col items-start" >
          <div className="w-full h-[246px] ">
            <img src={`${hotelData[index].hotelImage}`} className="w-full h-full rounded-2xl object-cover"></img>
          </div>
          <div className="font-medium text-[16px]">{hotelData[index].hotelName}</div>
          <div className="font-medium text-[10px]">{hotelData[index].hotelDescription}</div>
          <div className="flex flex-row items-baseline gap-2">
            <div className="flex gap-2 mt-2 ">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
              </div>
            <div> {hotelData[index].rating.quantity} reviews </div>
          </div>
          <div className="text-[10px]">Price per night: <span className="font-bold text-sm">${(hotelData[index].priceCents/100).toFixed(2)}</span> </div>
          </div>  
      </button>
      
    </>
  );
}