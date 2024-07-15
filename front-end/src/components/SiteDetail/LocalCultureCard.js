export default function LocalCultureCard(){
  return(
    <>
      <div className="w-[256px] h-[360px] flex flex-col items-center">
        <div className="w-full h-[266px] object-cover">
          <img className="w-full h-full rounded-2xl" src="coffee.jpeg"></img>
        </div>
        <div className="text-[16px] font-medium mt-5">Coffee shops</div>
        <div className="flex flex-row items-center bg-secondary-color p-1 rounded-3xl px-3">
          <img className="w-[18px] mr-1 pt-1" src="map_pin.svg"></img>
          <p className="text-xs font-semibold">See on Map</p>
        </div>
      </div>
    </>    
  );
}