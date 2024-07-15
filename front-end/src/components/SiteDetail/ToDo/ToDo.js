import "./ToDo.css"
const hotels = [
    { name: 'Hotel 1', image: "river.jpg" },
    { name: 'Hotel 1', image: "river.jpg" },
    { name: 'Hotel 1', image: "river.jpg" },
    { name: 'Hotel 1', image: "river.jpg" },
    {name:"people", image:"people.svg"}
  ];

const months=[
    {name:"Jan",color:"#FBBE01"},
    {name:"Jan",color:"#FBBE01"},
    {name:"Jan",color:"#FBBE01"},
    {name:"Jan",color:"#FBBE01"},
    {name:"Jan",color:"#FBBE01"},
    {name:"Jan",color:"#FBBE01"},
    {name:"Jan",color:"#FBBE01"},
    {name:"Jan",color:"#FBBE01"},
    {name:"Jan",color:"#FBBE01"},
]
const ToDo =() =>{
    return (
        <>
        <div className="page">

        <div className="max-4xl mx-auto p-6 space-y-8 font-poppins header">
            <div className="relative">
                <hr className="border-t border-gray-300 w-full absolute top-1/2 transform -translate-y-1/2"/>
                <h2 className="relative bg-white mt-8 mb-8 inline-block px-4 text-xl font-extrabold text-center left-1/2 transform -translate-x-1/2" style={{ left: '15%',  fontSize:'30px'}}>Things to do</h2>
            </div>
        </div>


        <div className="relative w-full  container h-[33rem]  m-0 " >

        {/* Hotels Dots*/}
        <img src="path_dot.svg" alt="overlay" className="absolute path_dot" />

        <div className="relative grid grid-cols-2 grid-rows-2 gap-10 w-full h-full items-center justify-center">
        {hotels.map((hotel, index) => (
                            <div key={index} className="flex flex-col items-end" 
                            style={{
                                top: index % 2 === 0 ? '10px' : 'unset',
                                bottom: index % 2 === 0 ? 'unset' : '10px',
                                left: index % 2 === 0 ? 'unset' : '10px',
                                right: index % 2 === 0 ? 'unset' : '10px',
                            }}>
                                <img src={hotel.image} alt={hotel.name} className="w-16 h-16 rounded-full border-5 border-cyan-950 mb-2" />
                                <span className="text-center text-gray-700 font-bold">{hotel.name}</span>
                            </div>

        ))}
        </div>
        
        <div className="mt-28 flex gap-3  ml-32 items-center ">
            <h3 className="font-bold">Best time to visit:</h3>
            <div className="flex flex-wap gap-4">

{ months.map((month,index) => (
    <div key={month.name} className="rounded-md px-4 py-2 text-white font-bold"
    style={{
        borderRadius:'10px',
        padding:'auto 20px',
        backgroundColor: month.color
    }}
    >
        {month.name}
    </div>
))}
                
            </div>

        </div>
        </div>


        </div>
        </>
    )
}
export default ToDo;