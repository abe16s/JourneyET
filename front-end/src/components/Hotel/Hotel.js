"use client"

import React from "react"
import SectionTitle from "./SectionTitle"
import RoomCard from "./RoomCard"
import ReviewCard from "./ReviewCard"
import "./hotel.css"
import Footer from '../Footer/Footer';

import { useState } from 'react';
import Header from "../Header/Header"

export default function Hotel() {
    const [rooms, setRooms] = useState(1);

    const incrementRooms = () => setRooms(rooms + 1);
    const decrementRooms = () => setRooms(rooms > 1 ? rooms - 1 : 1);

    const [travelers, setTravelers] = useState(1);

    const incrementTravelers = () => setTravelers(travelers + 1);
    const decrementTravelers = () => setTravelers(travelers > 1 ? travelers - 1 : 1);

    const [reviewStar, setReviewStar] = useState(0);

    return (
        <>
        <Header />
        <main className="w-10/12 mx-auto">
            <section id="images" className="grid grid-cols-3 grid-rows-3 gap-3">
                <img src="Haile-2.jpg" className="row-start-1 w-full h-full object-cover" />
                <img src="Haile-4.jpg" className="row-start-2 w-full h-full object-cover" />
                <img src="Haile-5.jpg" className="row-start-3 w-full h-full object-cover" />
                <img src="Haile-6.jpg" className="row-start-3 w-full h-full object-cover" />
                <img src="Haile-7.jpg" className="row-start-3 w-full h-full object--cover" />
                <img src="Haile-1.jpg" className="row-start-1 row-end-3 col-span-2 w-full h-full object-cover" />
            </section>
            <section>
                <h1 className="font-bold text-4xl mt-6">
                    Wonderland Hotel
                </h1>
                <div className="flex gap-1 my-2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Charleville Ave, Shenkor, Harar, Ethiopia</p>
                </div>
                <section className="flex flex-col-reverse md:flex-row gap-4 justify-between my-8">
                    <div className="flex flex-col gap-5 md:w-3/5">
                        <p>
                            Located in Harar, 3.6 miles from Matti Multiplex Theatre, Wonderland 
                            provides accommodations with an outdoor swimming pool, free 
                            private parking, a fitness center and a garden. Each room at the 5-star 
                            hotel has city views, and guests can enjoy access to a terrace and to a 
                            sauna. The property has a 24-hour front desk, airport transportation, room 
                            service and free WiFi.
                        </p>
                        <p>
                            Guest rooms at the hotel come with air conditioning, a seating area, a 
                            flat-screen TV with satellite channels, a safety deposit box and a private 
                            bathroom with a shower, free toiletries and a hairdryer. Each room is 
                            equipped with an electric tea pot, while some rooms are equipped with a 
                            kitchen with a fridge, a dishwasher and a minibar. At Wonderland 
                            every room has bed linen and towels.
                        </p>
                        <p>
                            A buffet breakfast is available daily at the accommodation. At Wonderland 
                            Harar you'll find a restaurant serving Mexican, Middle Eastern and 
                            Asian cuisine. Vegetarian, dairy-free and halal options can also be requested.
                        </p>
                        <p>
                            Asni Gallery is 3.8 miles from the hotel, while UNECA Conference Center is 
                            4 miles away. 
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 md:w-1/3 w-2/3">
                        <iframe className="w-full aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6310.085969100988!2d42.12699738325943!3d9.31298450582707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bdbbece5bcd9%3A0x93f9ecbb330226cc!2sWonderland%20Hotel!5e0!3m2!1sen!2set!4v1721151346663!5m2!1sen!2set" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                        <a href="https://maps.app.goo.gl/Cm3brs3wT3tv1rXf8" target="_blank" className="btn-yellow font-bold py-1 px-3 rounded-xl w-max">Open with Google Maps</a>
                    </div>
                </section>
            </section>
            <section className="my-12">
                <SectionTitle title={"Popular Facilities"}/>
                <div className="p-10 grid grid-cols-2 md:grid-cols-4 text-xl gap-4">
                    <div className="flex items-center gap-2"><i className="fa-solid fa-person-swimming text-3xl"></i><span>Pool</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-bus text-3xl"></i><span>Free airport shuttle</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-mug-saucer text-3xl"></i><span>Breakfast included</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-person-swimming text-3xl"></i><span>Pool</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-bus text-3xl"></i><span>Free airport shuttle</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-mug-saucer text-3xl"></i><span>Breakfast included</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-person-swimming text-3xl"></i><span>Pool</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-bus text-3xl"></i><span>Free airport shuttle</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-mug-saucer text-3xl"></i><span>Breakfast included</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-person-swimming text-3xl"></i><span>Pool</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-bus text-3xl"></i><span>Free airport shuttle</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-mug-saucer text-3xl"></i><span>Breakfast included</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-person-swimming text-3xl"></i><span>Pool</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-bus text-3xl"></i><span>Free airport shuttle</span></div>
                    <div className="flex items-center gap-2"><i className="fa-solid fa-mug-saucer text-3xl"></i><span>Breakfast included</span></div>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                    <div>
                        <h5 className="font-bold text-base">Parking and transportation</h5>
                        <ul className="pl-10 pt-1 list-disc">
                            <li>24-hour free roundtrip airport shuttle</li>
                            <li>Free secured self parking on site</li>
                            <li>Wheelchair-accessible parking and van parking available</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-base">Food and drink</h5>
                        <ul className="pl-10 pt-1 list-disc">
                            <li>Free buffet breakfast available daily 7:00 AM to 10:00 AM</li>
                            <li>2 restaurants</li>
                            <li>A poolside bar</li>
                            <li>Coffee and tea in common areas</li>
                            <li>Snack bar/deli</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-base">Conveniences</h5>
                        <ul className="pl-10 pt-1 list-disc">
                            <li>24-hour front desk</li>
                            <li>ATM</li>
                            <li>Gift shop/newsstand</li>
                            <li>Hair salon</li>
                            <li>Laundry facilities</li>
                            <li>Luggage storage</li>
                            <li>Safe at front desk</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-base">Family friendly</h5>
                        <ul className="pl-10 pt-1 list-disc">
                            <li>Laundry facilities</li>
                            <li>Outdoor pool</li>
                            <li>Playground</li>
                            <li>Snack bar/deli</li>
                            <li>Soundproofed rooms</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="my-12">
                <SectionTitle title={"Rooms"}/>
                <div className="w-full my-8 flex items-end justify-around flex-wrap gap-4">
                    <div className="relative">
                        <input 
                            type="date" 
                            id="date-picker" 
                            className="w-full h-12 px-4 pt-3 pb-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <label 
                            for="date-picker" 
                            className="absolute left-3 top-0 px-1 text-xs font-semibold bg-white transform -translate-y-1/2"
                        >
                            Check-in
                        </label>
                    </div>
                    <div className="relative">
                        <input 
                            type="date" 
                            id="date-picker" 
                            className="w-full h-12 px-4 pt-3 pb-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <label 
                            for="date-picker" 
                            className="absolute left-3 top-0 px-1 text-xs font-semibold bg-white transform -translate-y-1/2"
                        >
                            Check-out
                        </label>
                    </div>
                    <div className="w-full max-w-max mt-4">
                        <div className="relative max-w-72 min-w-48">
                            <div className="absolute left-3 font-semibold top-0 px-1 text-xs text-gray-500 bg-white transform -translate-y-1/2">
                            Rooms
                            </div>
                            <div className="flex items-center justify-between w-full h-12 px-4 bg-white border border-gray-300 rounded-md">
                            <i className="fa-solid fa-bed text-xl"></i>
                            <span className="text-lg font-semibold">{rooms}</span>
                            <div className="flex flex-col">
                                <button 
                                    onClick={incrementRooms} 
                                    className="focus:outline-none text-xl font-semibold"
                                >
                                    +
                                </button> 
                                <button 
                                    onClick={decrementRooms} 
                                    className="focus:outline-none text-xl font-semibold"
                                >
                                    -
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-max mt-4">
                        <div className="relative max-w-72 min-w-48">
                            <div className="absolute left-3 font-semibold top-0 px-1 text-xs text-gray-500 bg-white transform -translate-y-1/2">
                            Travelers
                            </div>
                            <div className="flex items-center justify-between w-full h-12 px-4 bg-white border border-gray-300 rounded-md">
                            <i className="fa-solid fa-user text-xl"></i>
                            <span className="text-lg font-semibold">{travelers}</span>
                            <div className="flex flex-col">
                                <button 
                                    onClick={incrementTravelers} 
                                    className="focus:outline-none text-xl font-semibold"
                                >
                                    +
                                </button> 
                                <button 
                                    onClick={decrementTravelers} 
                                    className="focus:outline-none text-xl font-semibold"
                                >
                                    -
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/> 
            </section>
            <section className="my-12">
                <SectionTitle title={"Guest reviews"}/>
                <div className="my-12 flex gap-5 overflow-x-auto">
                    <ReviewCard review={"“The property was very clean. Staff was very helpful. The food was good. Whatever you asked for you were commentated with.”"}/>
                    <ReviewCard review={"“Location an view were great. The staff was exceptional. The spa with barber, exercise, massage, etc. were great as was the pool.”"}/>
                    <ReviewCard review={"Very good. We loved our stay after 3 weeks of voluntary work in Ethiopia"}/>
                </div>
                <div className="flex flex-col gap-7 justify-between lg:flex-row">
                    <div>
                        <h4 className="font-bold text-2xl">Leave a review</h4>
                        <div className="flex gap-2 my-5">
                            <i className={`fa-star ${reviewStar >= 1 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(1)}}></i>
                            <i className={`fa-star ${reviewStar >= 2 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(2)}}></i>
                            <i className={`fa-star ${reviewStar >= 3 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(3)}}></i>
                            <i className={`fa-star ${reviewStar >= 4 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(4)}}></i>
                            <i className={`fa-star ${reviewStar >= 5 ? 'fa-solid': "fa-regular"}`} onClick={() => {setReviewStar(5)}}></i>
                        </div>
                        <textarea rows={5} cols={60} placeholder="Enter your comments here..." className="border-2 border-black rounded-md p-2 block max-w-full"/>
                        <button className="btn-yellow font-bold py-1 px-5 mt-3 rounded-2xl w-max">Post</button>
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl">Contacts</h4>
                        <ul className="pl-6 mt-3 flex flex-col gap-3 ">
                            <li><i className="fa-solid fa-globe mr-2 w-8 text-center "></i><a href="https://hailehotelsandresorts.com/" target="_blank" className="underline">Haile Hotels & Resorts Group</a></li>
                            <li><i className="fa-solid fa-phone mr-2 w-8 text-center "></i>+251  116 67 00 00</li>
                            <li><i className="fa-solid fa-envelope mr-2 w-8 text-center "></i>reservationaddis@haileresorts.com</li>
                            <li><i className="fa-solid fa-building mr-2 w-8 text-center "></i>8169</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}
