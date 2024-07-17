import '@fontsource/poppins/900.css';

const SiteDescription = () =>{

    return (
        <div className="mx-20">

        <div className="max-4xl mx-auto p-6 space-y-8 font-poppins">
            <div className="relative">
                <hr className="border-t border-gray-300 w-full absolute top-1/2 transform -translate-y-1/2"/>
                <h2 className="relative bg-white inline-block px-4 text-xl mt-9 mb-9 font-extrabold text-center left-1/2 transform -translate-x-1/2" style={{ left: '15%',  fontSize:'30px'}}>Description</h2>
            </div>
        </div>

        <div className='flex jusitfy-between items-start flex-col md:flex-row gap-8 space-x-0'>

            <div className="md:w-1/2 pr-4 col-auto  space-y-10">

            {/* heade name */}
            <h3 className="text-3xl font-bold mb-4 text-center"> Harer the Jegol wall</h3>

            {/* detail paragraph */}
            <p className="text-justify mb-4">
            The fortified historic town of Harar is located in the eastern part of the 
            country on a plateau with deep gorges surrounded by deserts and savannah. 
            The walls surrounding this sacred Muslim city were built between the 13th and 
            16th centuries. Harar Jugol, said to be the fourth holiest city of Islam, 
            numbers 82 mosques, three of which date from the 10th century, and 102 shrines, 
            but the townhouses with their exceptional interior design constitute the most 
            spectacular part of Harar's cultural heritage. The impact of African and Islamic
             traditions on the development of the town's building types and urban layout make 
             for its particular character and uniqueness.
            </p>
            <h3 className="text-xl  mb-2 text-center"> Things You can do</h3>
            <div className="grid grid-cols-2 gap-4 px-4 justify-between">

                {
                    [
                        {icon:"Gift.svg",activity:"Gift",description:"Buy gifts for yourslef and your family."},
                        {icon:"icon.svg",activity:"Pictures",description:"Take pictures of the historical sites."},
                        {icon:"Camera.svg",activity:"Pictures",description:"Take pictures of the historical sites."},
                        {icon:"Coffee.svg",activity:"Coffee",description:"Enjoy the natural and local coffee."},
                        {icon:"Map.svg",activity:"History",description:"Learn the history of Harar and its old empire."},
                        {icon:"sun.svg",activity:"Adventure",description:"Dive in to the culture of the omo valley."},

                    ].map((item,index)=>(
                        <div key={index} className="flex items-start space-x-2">
                            <span>
                                <img src={item.icon} className="text-2xl" />
                            </span>
                            <div>
          <div className="font-semibold">{item.activity}</div>
          <div className="text-sm">{item.description}</div>
        </div>
                            </div>
                    ))
                }
            </div>
            </div>

            <div className="md:w-1/2 w-full pl-4">
            <iframe
            className="w-full h-96 mb-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62995.67032089591!2d42.07694852802467!3d9.31293138689344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bda3c73a509d%3A0x47a0ad82e9e99ed6!2sHarar!5e0!3m2!1sen!2set!4v1721205812067!5m2!1sen!2set"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <div className='flex justify-center mx-auto items-center'>
          <button className="bg-[#D6C835] text-white px-4 py-2  rounded  hover:bg-opacity-75">Open with Google Maps</button>
          </div>
            </div>

        </div>
        </div>
    )
}

export default SiteDescription;