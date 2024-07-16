import React from "react";
import CustomInput from "./CustomInput";
import "./hotel.css";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';


export default function BookRoom() {
    return (
        <body>
            <Header />
            <main className="lg:px-20 px-6 py-8 flex flex-col md:flex-row gap-6 items-start">
                <section className="rounded-lg border-2 border-black  md:w-1/3">
                    <img src="../Haile-3.jpg" className="w-full rounded-t-lg"/>
                    <div className="flex flex-col lg:flex-row items-center px-4 py-2">
                        <h2 className="text-2xl font-bold">Haile Grand Addis Ababa</h2>
                        <div className="flex gap-1 my-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>    
                    </div>
                    <h3 className="text-xl font-medium pl-4 py-4">Premium Room, 1 King Bed</h3>
                    <p className="text-lg pl-4"><span className="font-semibold">Check-in</span> - Jul 17</p>
                    <p className="text-lg pl-4"><span className="font-semibold">Check-out</span> - Jul 19</p>
                    <div className="mt-12 mb-4 font-semibold flex justify-between px-4 text-xl"><span>Total</span><span>US$177.10</span></div>
                </section>
                <form className="rounded-lg border-2 border-black p-3 md:p-10 w-full">
                    <h3 className="text-2xl font-bold mb-3">Who's checking in</h3>
                    <div className="grid md:grid-cols-2 gap-10 md:p-10">
                        <CustomInput label="First name" type="text"/>
                        <CustomInput label="Last name" type="text"/>
                        <CustomInput label="Email address" type="email"/>
                        <CustomInput label="Phone number" type="number"/>
                    </div>
                    <h3 className="text-2xl font-bold my-4">Payment method</h3>
                    <div className="grid md:grid-cols-2 gap-10 md:p-10">
                        <CustomInput label="Cardholder’s name" type="text"/>
                        <CustomInput label="Card type" type="text"/>
                        <CustomInput label="Card number" type="number"/>
                        <CustomInput label="Expiration date" type="date"/>
                    </div>
                    <div className="text-right mt-8"><input type="submit" value={"Confirm booking"} className="btn-yellow font-bold py-1 px-4 rounded-2xl w-max cursor-pointer"/></div>
                </form>
            </main>
            <Footer />
        </body>
    )
}