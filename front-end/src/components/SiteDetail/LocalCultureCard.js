

export default function LocalCultureCard({index}){
  const cultureData = [
    {
      name:"Hyena Sight",
      image:"culture-1.jpg"
    },
    {
      name:"Arthur Rimbaud's museum",
      image:"culture-2.jpg"
    },
    {
      name:"The Great Mosque of Harar",
      image:"culture-3.jpg"
    },
    {
      name:"Traditional Harari house",
      image:"culture-4.jpg"
    }
  ];
  return(
    <>
      <div className="w-[450px] h-[360px] flex flex-col items-center">
        <div className="w-full h-[266px]">
          <img src={cultureData[index].image} className="w-full h-full rounded-2xl object-cover" ></img>
        </div>
        <div className="text-[16px] font-medium mt-5">{`${cultureData[index].name}`}</div>
        <div className="flex flex-row items-center bg-secondary-color p-1 rounded-3xl px-3">
          <img className="w-[18px] mr-1 pt-1" src="map_pin.svg"></img>
          <a href="https://www.google.com/maps/@9.0036788,38.7786577,7z?entry=ttu" className="text-xs font-semibold">See on Map</a>
        </div>
      </div>
    </>    
  );
}