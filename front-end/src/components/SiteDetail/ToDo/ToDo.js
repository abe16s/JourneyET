import "./ToDo.css"
const hotels = [
    { name: 'Hotel 1', image: "harer-1.jpg" },
    { name: 'Hotel 1', image: "harer-2.jpg" },
    { name: 'Hotel 1', image: "harer-3.jpg" },
    { name: 'Hotel 1', image: "river.jpg" },
    {name:"people", image:"people.svg"}
  ];

const months=[
    {name:"Sep",color:"#FBBE01"},
    {name:"Oct",color:"#FAEC01"},
    {name:"Nov",color:"#DFFF01"},
    {name:"Dec",color:"#DFFF01"},
    {name:"Jan",color:"#13FF01"},
    {name:"Feb",color:"#13FF01"},
    {name:"Mar",color:"#13FF01"},
    {name:"Apr",color:"#DFFF01"},
    {name:"Jun",color:"#DFFF01"},
    {name:"Jul",color:"#DFFF01"},
    {name:"Aug",color:"#DFFF01"},
]
const ToDo =() =>{
    return (
        <>
        <div className="ToDoPage">

        <div className="max-4xl mx-auto p-6 space-y-8 font-poppins header-todo">
            <div className="relative">
                <hr className="border-t border-gray-300 w-full absolute top-1/2 transform -translate-y-1/2"/>
                <h2 className="relative bg-white mt-8 mb-8 inline-block px-4 text-xl font-extrabold text-center left-1/2 transform -translate-x-1/2" style={{ left: '15%',  fontSize:'30px'}}>Things to do</h2>
            </div>
        </div>


        <div className="relative w-full  container" >

        {/* Hotels Dots*/}
        <img src="path_dot.svg" alt="overlay" className="absolute path_dot" />


        <div className="hotel-section flex gap-1">
            
            <div className="column left w-4/12">
                <img src="people.svg" alt="people"  className="w-full h-auto"/>
            </div>

            <div className="column middle w-2/12 relative h-full">
            <dic className="h-2/5">
            <img src="harer-1.jpg" alt="Hotel" className="h-32 w-40 rounded-lg absolute top-24 right-2"/>
            </dic>
            <div className="h-3/5">
            <img src="harer-2.jpeg" alt="Hotel" className="h-32 w-40 rounded-lg absolute bottom-0 right-20 "/>
            </div>
            </div>

            <div className="column large w-4/12">
                <h3 className="md:font-extrabold font-bold md:text-6xl text-3xl">
                <span className="">Harer The Living</span> <br />
                <span className="text-[#F1DF24] text-left mt-4">Museum</span>
                     </h3>
            </div>

            <div className="column right w-2/12 relative">

            <img src="harer-3.jpg" alt="Hotel" className="h-32 w-40 rounded-lg absolute right-3 top-5"/>
            <img src="harer-4.jpg" alt="Hotel" className="h-32 w-40 rounded-lg absolute bottom-3 right-3 bottm-0"/>
            </div>

        </div>


        {/* <div className="relative grid grid-cols-2 grid-rows-2 gap-10 w-full h-full items-center justify-center">
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
        </div> */}


        



        <div className="mt-5 mb-3 flex flex-col lg:flex-row gap-3  ml-32 items-center ">
            <h3 className="font-bold">Best time to visit:</h3>
            <div className="flex flex-wrap gap-4">

{ months.map((month,index) => (
    <div key={month.name} className="rounded-md px-4 py-2 text-black font-bold"
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