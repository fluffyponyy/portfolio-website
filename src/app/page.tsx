'use client';
import './page.css';
import Nav from "@/components/nav"

export default function Home() {


    return (
        <div className="container">
            <div className="star">⭐</div>
            <h1 className="name">Ana Constantinescu</h1>
            <h2>Computer Science student at UVic</h2>
            < Nav />
        </div>
    );
}