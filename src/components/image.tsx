'use client';
import './image.css';


type Image = {
    key: number;
    url: string;
    height: number;
    width: number;
}

export default function Image({ key, url, height, width }: Image) {
    return (

        <img
            key={key}
            src={`/assets/images/${url}`} // prepend public folder path
            style={{ height: `${height}px`, width: `${width}px` }}
        />

    )
};
