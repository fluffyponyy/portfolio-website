'use client';
import { useMemo } from 'react';
import './star_field.css'; // use the same CSS from above or include styles in a global file

import { useEffect, useState } from 'react';

export default function StarField({ count = 80 }) {
    const stars = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            s: 1 + Math.random() * 2,
            d: 2 + Math.random() * 4,
            o: 0.3 + Math.random() * 0.5
        }));
    }, [count]);

    return (
        <div className="starfield">
            {stars.map((s, i) => (
                <span
                    key={i}
                    className="star"
                    style={{
                        left: `${s.x}%`,
                        top: `${s.y}%`,
                        width: s.s,
                        height: s.s,
                        opacity: s.o,
                        animationDuration: `${s.d}s`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}
        </div>
    );
}