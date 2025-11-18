'use client';
import { useState, useEffect } from "react";
import ProjectCard from "@/components/project_card";
import './about.css';
import ProjectModal from "@/components/project_modal";
import Nav from "@/components/nav";


export default function AboutPage() {

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>about</h1>
                <div className="nav-links">
                    <Nav />
                </div>
            </div>


            <div className="projects-grid">

            </div>
        </div>
    );
}