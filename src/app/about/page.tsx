'use client';
import { useState, useEffect } from "react";
import ProjectCard from "@/components/project_card";
import './about.css';
import ProjectModal from "@/components/project_modal";
import Nav from "@/components/nav";
import Links from "@/components/links"
import Image from "@/components/image";

export default function AboutPage() {

    return (
        <div className="about-container">
            <div className="about-header">
                <h1>about</h1>
                <div className="nav-links">
                    <Nav />
                </div>

            </div>

            <div className="about-body">
                <h2>Hey! I'm Ana 💫</h2>

                <Image key={1}
                    url={"its_me.jpeg"}
                    height={36}
                    width={48}></Image>

                <h3> I'm a 4th year Computer Science student at the University of Victoria in BC.</h3>

                <p>Reach out to me on social media:</p>
                <Links></Links>
            </div>


            <div className="projects-grid">

            </div>
        </div >
    );
}