'use client';
import './about.css';
import Nav from "@/components/nav";
import Links from "@/components/links"
import Image from "@/components/image";
import StarField from "@/components/star_field_wrapper";
import { useEffect } from 'react';

export default function AboutPage() {
    useEffect(() => {
        document.title = "About | Ana Constantinescu";
    }, []);

    return (
        <div className="primary-container">
            <div className="primary-header">
                <h1>about</h1>
                <div className="nav-links">
                    <Nav />
                </div>

            </div>

            <div className="page-body">
                <StarField count={80} />
                <h1>Hey! I'm Ana 💫</h1>

                <Image key={1}
                    url={"its_me.jpeg"}
                    height={400}
                    width={500}
                    shape="circle"
                ></Image>

                <h3> I'm a 4th year Computer Science student at the University of Victoria in BC.</h3>

                <p> My interests are <b>word puzzles,</b> <b>experimental projects,</b> and <b>software testing.</b></p>

                <p>Reach out to me on social media:</p>
                <Links />
            </div>


            <div className="projects-grid">

            </div>
        </div >
    );
}