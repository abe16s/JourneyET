"use client"
import React from "react";
import SiteDetail from "../../components/SiteDetail/SiteDetail"
import Gallery from "@/components/SiteDetail/Gallery/Gallery";
import SiteDescription from "../../components/SiteDetail/SiteDescription/SiteDescription";
import ToDo from "../../components/SiteDetail/ToDo/ToDo";
import TransOption from "../../components/SiteDetail/TransOption/TransOption";

export default function page() {
    return (
        <>
        <Gallery />
        <SiteDescription />
        <ToDo />
        <TransOption />
        </>
    )
}