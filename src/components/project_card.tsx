'use client'; // <-- add this at the very top of your file

import React from "react";
import './project_card.css';


interface ProjectCardProps {
    title: string;
    short_description: string;
    long_description?: string;
    tags?: string[];
    date?: string;
    images?: string[];
    thumbnail?: number; //an index of the image list
    onClick?: () => void; //make the window pop up here
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, short_description, long_description, tags, date, images, thumbnail, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="card"
        >
            <h3 className="card-title">{title}</h3>
            {short_description && <p className="card-description">{short_description}</p>}
        </div>
    );
};

export default ProjectCard;