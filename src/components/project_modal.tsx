'use client';
import './project_modal.css';
import Image from "@/components/image";

type Project = {
    title: string;
    long_description: string;
    images: string[];
    tags: string[];
};

type ProjectModalProps = {
    project: Project;
    onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <div className="project-modal" onClick={onClose}>

            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="modal-close" onClick={onClose}>←</button>
                <h2>{project.title}</h2>

                <p>{project.long_description}</p>

                <div className="modal-images">
                    {project.images.map((img, i) => (
                        <Image
                            key={i}
                            url={img}
                            height={200}
                            width={350}
                        />
                    ))}
                </div>
                <hr></hr>
                <div className="modal-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}