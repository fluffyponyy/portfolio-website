'use client';
import { useState, useEffect } from "react";
import ProjectCard from "@/components/project_card";
import './about.css';
import ProjectModal from "@/components/project_modal";
import Nav from "@/components/nav";
import Links from "@/components/links"


export default function AboutPage() {

    return (
        <div className="about-container">
            <div className="about-header">
                <h1>about</h1>
                <div className="nav-links">
                    <Nav />
                </div>
                <div className="about-body">
                    <Links></Links>
                </div>
            </div>


            <div className="projects-grid">

            </div>
        </div>
    );
}