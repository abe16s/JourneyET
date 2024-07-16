export default function TourGuideCard(){
  return(
    <>
      <div className="w-[412px] rounded-[20px] bg-primary-color flex flex-col gap-y-4 mr-6">
        <div className="ml-6 mt-6 font-extrabold">3 - Day Visit With Waterfall Sight Seeing</div>

        <div className="flex flex-row gap-1 justify-around">
          <div className="w-[104px] h-[97px] object-cover ml-6 mr-4">
            <img className="w-full h-full rounded-lg" src = "tourLogo.jpg"></img>
          </div>
          <div>
            <div className="font-semibold"> Shalal Tour Agency</div>
            <div className="text-xs"> shalal Tour Agency offers wide range of services</div>
            <div className="flex gap-2 mt-2 ">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className="flex flex-row justify-between items-baseline mt-2">
              <div className="font-semibold">$1347.45</div>
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