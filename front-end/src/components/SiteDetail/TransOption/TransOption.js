import './TransOption.css'
const TransOption =() =>{
    return (
        <>
        <div className="page my-16 mx-12 bg-white">
            {/* header */}
                <div className="max-4xl space-y-8 font-poppins">
            <div className="relative">
                <hr className="border-t border-gray-300 w-full absolute top-1/2 transform -translate-y-1/2"/>
                <h2 className="relative bg-white mt-8 mb-8 inline-block px-4 text-xl font-extrabold text-center left-1/2 transform -translate-x-1/2" style={{ left: '18%',  fontSize:'30px'}}>Transportation options</h2>
            </div>
        </div>
{/* 
        body */}
        <div className="TranContainer flex flex-col md:flex-row md:gap-36  mt-8">


        <div className="container-options basis-1/2 space-y-1 grid col-auto gap-1 relative"> 

            <div className="box flex justify-center items-center text-center border-2 border-black rounded-lg p-4 max-w-lg mx-auto mt-6">
           From Your Location to Addis Ababa
  </div>
  <img src="arrow_down.svg" className="flex justify-center box-content items-center h-auto text-center p-0 max-w-lg mx-auto" />


  <div className="box flex justify-center items-center text-center border-2 border-black rounded-lg p-4 max-w-lg mx-auto ">
            Addis Ababa to DireDawa
  </div>
  <img src="arrow_down.svg" className="flex justify-center box-content items-center h-auto text-center p-0 max-w-lg mx-auto" />

  <div className="box flex justify-center items-center text-center border-2 border-black rounded-lg p-4 max-w-lg mx-auto mb-7">
            DireDawa to Harar
  </div>

  <div className="h-8"></div>

<div className="box around_city flex justify-center items-center text-center border-2 rounded-lg p-2 max-w-lg mx-auto">
  Around City
</div>
              </div>



            <div className="container-people basis-1/2 flex items-center justify-center">
                <img className="w-4/5 h-auto" src="tranOptions.svg" ></img>
            </div>
        </div>
        </div>
        </>
    )
}
export default TransOption;