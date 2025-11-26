'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import './nav.css';

export default function Nav() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav className="nav-container">
            <div className="nav-buttons">
                {pathname !== '/' && (
                    <a className="nav-link" onClick={() => router.push('/')}>home</a>
                )}
                <a className="nav-link" onClick={() => router.push('/projects')}>projects</a>
                <a className="nav-link" onClick={() => router.push('/resume')}>resume</a>
                <a className="nav-link" onClick={() => router.push('/about')}>about</a>
            </div>
        </nav>
    );
}
