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

    const [filter, addTagToFilter] = useState<string[]>([])

    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then((data: Project[]) => setProjects(data));
    }, []);

    let tag_list: string[] = [];

    //I find this more readable than trying to selectively push arrays of tags 
    for (var i = 0; i < projects.length; i++) {
        for (var j = 0; j < projects[i].tags.length; j++) {
            if (!tag_list.includes(projects[i].tags[j])) {
                tag_list.push(projects[i].tags[j])
            }
        }

    }

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>projects</h1>
                <div className="nav-links">
                    <Nav />
                </div>
            </div>

            <p style={{ fontStyle: 'italic', marginBottom: '2rem', marginTop: 0, color: '#333' }}>filter by tag:</p>

            <div className="modal-tags">
                {tag_list.map((tag: string, i: number) => (
                    <div key={i} onClick={() => { if (filter.includes(tag)) { addTagToFilter(filter.filter(item => item !== tag)) } else { addTagToFilter(filter => [...filter, tag]) } }}>
                        <span key={i}>{tag}</span>
                    </div>
                ))}
            </div>

            <div className="projects-grid">
                {projects.filter(p => filter.every(item => p.tags.includes(item))).map((proj: Project, i: number) => (
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

            {
                selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )
            }
        </div >
    );
}