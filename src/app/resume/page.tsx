'use client'
import DownloadButton from "@/components/download_button";
import Nav from "@/components/nav";
import './resume.css';
import StarField from "@/components/star_field_wrapper";
import { useEffect } from "react";

function Resume() {
    const pdfSource = '/assets/ana-constantinescu-resume-2026.pdf';
    const fileName = 'ana-constantinescu-resume-2026.pdf';
    useEffect(() => {
        document.title = "Resume | Ana Constantinescu";
    }, []);
    return (

        <div className="primary-container">
            <StarField count={80} />
            <div className="primary-header">
                <h1>resume</h1>
                <div className="nav-links">
                    <Nav />
                </div>
            </div>
            <div className="page-body   resume-display">
                <iframe
                    src={pdfSource}
                    width="600rem%"
                    height="700rem"
                    title="Resume"
                    style={{ border: ".5px solid white", borderRadius: "3px", boxShadow: "0 4px 20px rgba(0, 0, 0, .25)", margin: "1em" }}
                />

                <DownloadButton file_path={pdfSource} file_name={fileName} />
            </div>
        </div>
    );
}

export default Resume;