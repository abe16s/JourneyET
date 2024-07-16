import React from "react";
import SiteDetail from "../../components/SiteDetail/SiteDetail"
import LocalCultureCard from "../../components/SiteDetail/LocalCultureCard"
import ExperienceCard from "../../components/SiteDetail/ExperienceCard"
import TourGuideCard from "../../components/SiteDetail/TourGuideCard"
import Tabs from "../../components/SiteDetail/Tabs"
import HotelCard from "../../components/SiteDetail/HotelCard"
import Comment from "../../components/SiteDetail/Comment";


export default function page() {
    return (
        <>
            <SiteDetail/>
            
            <div className="bg-primary-color ">
                <Tabs padding={true} tabname={"Local Cultures and Gift Shops"} section={[<HotelCard/>,<HotelCard/>,<HotelCard/>,<HotelCard/>]}/>
            </div>
                        
            <Tabs padding={false} tabname={"Local Cultures and Gift Shops"} section={[<LocalCultureCard/>,<LocalCultureCard/>,<LocalCultureCard/>,<LocalCultureCard/>]}/>
            <Tabs padding={false} tabname={"TourGuides"} section={[<TourGuideCard/>,<TourGuideCard/>,<TourGuideCard/>]}/>
            <Tabs padding={false} tabname={"Experience"} section={[<ExperienceCard/>,<ExperienceCard/>,<ExperienceCard/>]}/>
            <Comment/>
        </>
        
    )
}