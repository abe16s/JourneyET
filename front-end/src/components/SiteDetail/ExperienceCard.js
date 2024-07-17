export default function ExperienceCard({index}){
  const experienceData = [
    {
      name: "Matt H.",
      picture: "profile-3.jpg",
      details: "Excellent knowledge of Harar! Provided insightful and engaging tours. Highly recommend for an enriching experience.",
    },
    {
      name: "Stacy D.",
      picture: "profile-1.jpeg",
      details: "Harar was interesting, with unique sites and friendly people, but some areas were underwhelming.",
    },
    {
      name: "Rob M.",
      picture: "profile-2.jpeg",
      details: "Harar had some historical charm, but overall, the visit didn't meet expectations. Could be better maintained.",
    },
  ]
  return(
    <>
        <div className="flex flex-col items-center justify-center w-[412px] gap-y-4 border-2 rounded-2xl ml-10 mb-7">
          <div className="w-24 h-24 mt-6">
            <img src={experienceData[index].picture} className="w-full h-full rounded-full object-cover"></img>
          </div>
          <div className="text-left font-semibold">{experienceData[index].name}</div>
          <div className="ml-6 mr-4 mb-6"> 
            {experienceData[index].details}
          </div>
        </div>   
    </>
  );
};