"use client"

import React from "react"
import { useRouter } from "next/navigation";
import "./sitedetail.css"

export default function SiteDetail() {
    const router = useRouter();

    return (
        <>
            <div className="flex items-center justify-center min-h-screen lalibela">
            </div>
            <div className="bg-text flex flex-col items-center text-white">
                <div className="flex flex-row items-center">
                    <img src="axum-logo.svg" className="w-16  svg-icon"/>
                    <h1 className="text-white text-5xl font-bold">JourneyET</h1>        
                </div>
                <h3 className="font-semibold my-4">Details Page</h3>
                <button className="bg-yellow-300 font-bold p-1 rounded-lg" onClick={() => router.push("/")}>Got back to home</button>
            </div>
            
            
        </>
        
    )
}
