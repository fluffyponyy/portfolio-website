'use client';
import ProjectCard from "@/components/project_card";

export default function Home() {
    const handleClick = (title: string) => {
        alert(`Clicked ${title}`);
    };

    return (
        <div className="p-8 grid grid-cols-3 gap-6">
            <ProjectCard title="Project 1" short_description="My first project" onClick={() => handleClick("Project 1")} />
            <ProjectCard title="Project 2" short_description="Another project" onClick={() => handleClick("Project 2")} />
            <ProjectCard title="Project 3" short_description="Cool project" onClick={() => handleClick("Project 3")} />
        </div>
    );
}