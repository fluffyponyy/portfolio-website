'use client';
import { useState, useEffect } from "react";
import ProjectCard from "@/components/project_card";
import './project_page.css';
import ProjectModal from "@/components/project_modal";
import Nav from "@/components/nav";

type Project = {
    title: string;
    short_description: string;
    long_description: string;
    images: string[];
    date: string;
    thumnail: number;
    tags: string[];
};


export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then((data: Project[]) => setProjects(data));
    }, []);


    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>projects</h1>
                <div className="nav-links">
                    <Nav />
                </div>
            </div>

            <p style={{ fontStyle: 'italic', marginBottom: '2rem', marginTop: 0, color: '#333' }}>filter by tag:</p>

            <div className="projects-grid">
                {projects.map((proj: Project, i: number) => (
                    <div key={i} onClick={() => setSelectedProject(proj)}>
                        <ProjectCard
                            title={proj.title}
                            short_description={proj.short_description}
                            images={proj.images}
                            tags={proj.tags}
                        />
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}