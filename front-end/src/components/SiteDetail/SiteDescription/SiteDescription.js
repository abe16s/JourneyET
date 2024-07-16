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

        <div className='flex jusitfy-between items-start  gap-8 space-x-0'>

            <div className="w-1/2 pr-4 col-auto  space-y-10">

            {/* heade name */}
            <h3 className="text-3xl font-bold mb-4 text-center"> Harer the Jegol wall</h3>

            {/* detail paragraph */}
            <p className="text-justify mb-4">
            This is a detailed description about the tourist attraction site. 
            It includes historical significance, unique features, and other interesting information that
             visitors might find useful.
            </p>
            <h3 className="text-xl  mb-2 text-center"> Things You can do</h3>
            <div className="grid grid-cols-2 gap-4 px-4 justify-between">

                {
                    [
                        {icon:"Gift.svg",activity:"History",description:"dive into the culture of omo valley"},
                        {icon:"icon.svg",activity:"History",description:"dive into the culture of omo valley"},
                        {icon:"Camera.svg",activity:"History",description:"dive into the culture of omo valley"},
                        {icon:"Coffee.svg",activity:"History",description:"dive into the culture of omo valley"},
                        {icon:"Map.svg",activity:"History",description:"dive into the culture of omo valley"},
                        {icon:"sun.svg",activity:"History",description:"dive into the culture of omo valley"},

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

            <div className="w-1/2 pl-4">
            <iframe
            className="w-full h-96 mb-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6163383836797!2d38.76361131535779!3d9.005401793526828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e61ab9fa4d%3A0x6638bb870b62a137!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1602938891970!5m2!1sen!2sus"
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