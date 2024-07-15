"use client"
import React from "react";
import SiteDetail from "../../components/SiteDetail/SiteDetail";
import Gallery from "../../components/SiteDetail/Gallery/Gallery";
import SiteDescription from "../../components/SiteDetail/SiteDescription/SiteDescription";
import ToDo from "../../components/SiteDetail/ToDo/ToDo";
import TransOption from "../../components/SiteDetail/TransOption/TransOption";
import Resorts from "../../components/SiteDetail/Resorts/Resorts";
import "./layout.css";

export default function page() {
    return (
        <div className="page">
        <Gallery />
        <SiteDescription />
        <ToDo />
        <TransOption />
        <Resorts />
        </div>
    )
}