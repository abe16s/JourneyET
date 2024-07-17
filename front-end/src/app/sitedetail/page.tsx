"use client"
import React from "react";
import LocalCultureCard from "../../components/SiteDetail/LocalCultureCard"
import ExperienceCard from "../../components/SiteDetail/ExperienceCard"
import TourGuideCard from "../../components/SiteDetail/TourGuideCard"
import Tabs from "../../components/SiteDetail/Tabs"
import HotelCard from "../../components/SiteDetail/HotelCard"
import Comment from "../../components/SiteDetail/Comment";
import Gallery from "@/components/SiteDetail/Gallery/Gallery";
import SiteDescription from "../../components/SiteDetail/SiteDescription/SiteDescription";
import ToDo from "../../components/SiteDetail/ToDo/ToDo";
import TransOption from "../../components/SiteDetail/TransOption/TransOption";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"

export default function page() {
    return (
        <>
        <Header/>
        <Gallery />
        <SiteDescription />
        <ToDo />
        <TransOption />
        <div className="bg-primary-color ">
            <Tabs padding={true} tabname={"Stay Resorts"} section={[<HotelCard index={0}/>,<HotelCard index={1}/>,<HotelCard index={2}/>,<HotelCard index={3}/>]}/>
        </div>
        <Tabs padding={false} tabname={"Local Cultures and Gift Shops"} section={[<LocalCultureCard index={0}/>,<LocalCultureCard index={1}/>,<LocalCultureCard index={2}/>,<LocalCultureCard index={3}/>]}/>
        <Tabs padding={false} tabname={"TourGuides"} section={[<TourGuideCard index={0}/>,<TourGuideCard index={1}/>,<TourGuideCard index={2}/>]}/>
        <Tabs padding={false} tabname={"Experience"} section={[<ExperienceCard index={0}/>,<ExperienceCard index={1}/>,<ExperienceCard index={2}/>]}/>
        <Comment/>
        <Footer/>
        </>
    )
}