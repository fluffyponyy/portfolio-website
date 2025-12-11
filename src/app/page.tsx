'use client';
import './page.css';
import Nav from "@/components/nav"
import Links from "@/components/links"
import StarField from "@/components/star_field_wrapper";
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = "Home | Ana Constantinescu";
    }, []);


    return (
        <>
            <StarField count={80} />
            <div className="container   main">
                <div className="shooting-star">★</div>
                <h1 className="name">Ana Constantinescu</h1>
                <h2>Computer Science student at UVic</h2>
                < Nav />
                <Links />
            </div>
        </>
    );
}