'use client';
import './image.css';


type Image = {
    key: number;
    url: string;
    height: number;
    width: number;
    shape?: string;
}

export default function Image({ url, height, width, shape }: Image) {
    return (

        <img
            src={`/assets/images/${url}`} // prepend public folder path
            style={{ height: `${height}px`, width: `${width}px` }}
            className={shape ? "circle" : ""}
        />

    )
};
