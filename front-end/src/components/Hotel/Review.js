import React from "react"

export default function Review() {
    return (
        <div className="max-w-80 min-w-72 rounded-lg border-2 border-black shadow-xl p-6">
            <div className="flex items-center">
                <img src="profile-pic.jpg" className="max-w-16 rounded-full aspect-square object-cover mr-6"/>
                <div>
                    <p className="font-bold">Leykun B.</p>
                    <p>Ethiopia</p>
                </div>
            </div>
            <div className="flex gap-2 my-4 justify-center">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel velit 
                a est placerat dictum et et libero. Vestibulum ante ipsum primis in 
                faucibus orci luctus et ultrices 
            </p>
        </div>
    )
}