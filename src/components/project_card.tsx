'use client';

import React from "react";
import './project_card.css';
import Image from "@/components/image";

interface ProjectCardProps {
    title: string;
    short_description?: string;
    long_description?: string;
    tags?: string[];
    date?: string;
    images?: string[];
    thumbnail?: number; // index of image to use as thumbnail
    onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    short_description,
    long_description,
    tags = [],
    images = [],
    thumbnail = 0,
    date,
    onClick,
}) => {
    // ensure thumbnail index is valid
    const thumbnailIndex = Math.min(thumbnail, images.length - 1);

    return (
        <div onClick={onClick} className="card">
            <h3 className="card-title">{title}</h3>

            {short_description && (
                <p className="card-description">{short_description}</p>
            )}

            {long_description && (
                <p className="card-long-description">{long_description}</p>
            )}

            {images.length > 0 && (
                <div className="card-images">
                    {images.slice(0, 2).map((url, i) => (
                        <Image
                            key={i}
                            url={url}
                            height={100}
                            width={200}
                        />
                    ))}
                </div>
            )}

            {tags.length > 0 && (
                <div className="card-tags">
                    {tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                    ))}
                </div>
            )}

            {date && <p className="card-date">{date}</p>}
        </div>
    );
};

export default ProjectCard;