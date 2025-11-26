'use client';
import "./download_button.css"


type File = {
    file_path: string;
    file_name: string;
};

//Download button code from https://github.com/rowanalthorp/portfolio-website
export default function DownloadButton(file: File) {
    const handleDownloaded = () => {
        const link = document.createElement('a');
        link.href = file.file_path;
        link.download = file.file_name + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button onClick={handleDownloaded} className="downloadButton">
            Download resume
        </button>
    );
};