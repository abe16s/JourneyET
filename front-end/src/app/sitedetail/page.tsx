import React from "react";
import SiteDetail from "../../components/SiteDetail/SiteDetail"
import LocalCultureCard from "../../components/SiteDetail/LocalCultureCard"
import ExperienceCard from "../../components/SiteDetail/ExperienceCard"
import TourGuideCard from "../../components/SiteDetail/TourGuideCard"
import Tabs from "../../components/SiteDetail/Tabs"
export default function page() {
    return (
        <>
            <SiteDetail/>
            <Tabs tabname={"Local Cultures and Gift Shops"} section={[<LocalCultureCard/>,<LocalCultureCard/>,<LocalCultureCard/>,<LocalCultureCard/>]}/>
            <Tabs tabname={"TourGuides"} section={[<TourGuideCard/>,<TourGuideCard/>,<TourGuideCard/>]}/>
            <Tabs tabname={"Experience"} section={[<ExperienceCard/>,<ExperienceCard/>,<ExperienceCard/>]}/>
            
        </>
        
    )
}