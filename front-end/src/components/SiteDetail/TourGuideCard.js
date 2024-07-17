export default function TourGuideCard({index}){
  const tourData  = [
    {
      offer:"3 - Day Visit With Camping Outdoors",
      image:"tourLogo-1.jpg",
      agency:"Shala Tour Agency",
      service:"We offer personalized itineraries tailored to your interests and preferences.",
      rating: {
        stars: 4.5,
      },
      priceCents: 126780
    },
    {
      offer:"5-day Trip Covering All of Harar",
      image:"tourLogo-2.jpg",
      agency:"Ipsum Tour Agency",
      service:"Our experienced guides provide in-depth knowledge and local insights.",
      rating: {
        stars: 4.5,
      },
      priceCents: 166700
    },
    {
      offer:"2-day trip with full services",
      image:"tourLogo-3.jpg",
      agency:"ThunderTravel Tour Agency",
      service:"We ensure seamless travel with 24/7 customer support and assistance.",
      rating: {
        stars: 4.5,
      },
      priceCents: 96750
    },
  ]

  return(
    <>
      <div className="w-[412px] rounded-[20px] bg-primary-color flex flex-col gap-y-4 mr-6">
        <div className="ml-6 mt-6 font-extrabold">{tourData[index].offer}</div>

        <div className="flex flex-row gap-1 justify-around">
          <div className="w-[104px] h-[97px] ml-6 mr-4">
            <img className="w-full h-full rounded-lg object-cover" src = {tourData[index].image}></img>
          </div>
          <div>
            <div className="font-semibold">{tourData[index].agency}</div>
            <div className="text-xs">{tourData[index].service}</div>
            <div className="flex gap-2 mt-2 ">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className="flex flex-row justify-between items-baseline mt-2">
              <div className="font-semibold">${(tourData[index].priceCents/100).toFixed(2)}</div>
              <div className="mr-6 mb-6">
                <button className=" bg-secondary-color rounded-[57px]
                px-8 py-1 text-sm font-semibold">See package</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}