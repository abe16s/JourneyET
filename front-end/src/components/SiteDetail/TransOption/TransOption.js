const TransOption =() =>{
    return (
        <>
        <div className="page my-5 mx-12 bg-white">
            {/* header */}
                <div className="max-4xl space-y-8 font-poppins">
            <div className="relative">
                <hr className="border-t border-gray-300 w-full absolute top-1/2 transform -translate-y-1/2"/>
                <h2 className="relative bg-white mt-8 mb-8 inline-block px-4 text-xl font-extrabold text-center left-1/2 transform -translate-x-1/2" style={{ left: '15%',  fontSize:'30px'}}>Transportation options</h2>
            </div>
        </div>
{/* 
        body */}
        <div className="TranContainer flex gap-36  mt-8">


            <div className="container-options basis-1/2 space-y-4 grid grid-rows-7 grid-flow-col gap-10"> 

            <div className="box flex justify-center items-center text-center border-2 border-black rounded-lg p-4 max-w-lg mx-auto">
            OptionsCheese on toast airedale the big cheese.
  </div>
  <div className="box flex justify-center items-center text-center border-2 border-black rounded-lg p-4 max-w-lg mx-auto">
            OptionsCheese on toast airedale the big cheese.
  </div>

  <div className="box flex justify-center items-center text-center border-2 border-black rounded-lg p-4 max-w-lg mx-auto">
            OptionsCheese on toast airedale the big cheese.
  </div>

  <div className="box flex justify-center items-center text-center border-2 border-black rounded-lg p-4 max-w-lg mx-auto">
            OptionsCheese on toast airedale the big cheese.
  </div>

  <div className="box flex justify-center items-center text-center border-2 border-black rounded-lg p-4 max-w-lg mx-auto">
            OptionsCheese on toast airedale the big cheese.
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