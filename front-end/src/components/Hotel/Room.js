import react from "react"

export default function Room() {
    return (
        <div className="max-w-72 rounded-lg border-2 border-black shadow-xl">
            <img src="Haile-3.jpg" className="w-full rounded-t-lg"/>
            <h3 className="font-bold text-lg text-center mt-2">Premium Room, 1 King Bed</h3>
            <div className="pl-4 mt-5 flex flex-col gap-1">
                <div><i className="fa-solid fa-expand w-8 text-center mr-2"></i><span>419 sq ft</span></div>
                <div><i className="fa-solid fa-users w-8 text-center mr-2"></i><span>Sleeps 2</span></div>
                <div><i className="fa-solid fa-building w-8 text-center mr-2"></i><span>City view</span></div>
                <div><i className="fa-solid fa-mug-saucer w-8 text-center mr-2"></i><span>Free breakfast</span></div>
                <div><i className="fa-solid fa-wifi w-8 text-center mr-2"></i><span>Free WiFi</span></div>
            </div>
            <div className="flex justify-between items-center px-6 mt-8 mb-3">
                <p className="font-bold">$175</p>
                <button className="bg-yellow-200 font-bold py-1 px-4 rounded-lg w-max">Reserve</button>
            </div>
        </div>
    )
}