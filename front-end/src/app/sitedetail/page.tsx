"use client"
import React from "react";
import SiteDetail from "../../components/SiteDetail/SiteDetail"
import Gallery from "@/components/SiteDetail/Gallery/Gallery";
import SiteDescription from "../../components/SiteDetail/SiteDescription/SiteDescription";
import ToDo from "../../components/SiteDetail/ToDo/ToDo";
import TransOption from "../../components/SiteDetail/TransOption/TransOption";
import Header from "../../components/Header/Header";

export default function page() {
    return (
        <>
        <Header />
        <Gallery />
        <SiteDescription />
        <ToDo />
        <TransOption />
        </>
    )
}