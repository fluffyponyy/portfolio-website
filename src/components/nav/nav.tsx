'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import './nav.css';

export default function Nav() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div>
            {pathname === '/' ? (
                <div>

                    <button onClick={() => router.push('/projects')}>projects</button>
                    <button onClick={() => router.push('/about')}>about</button>
                </div>

            ) : (
                <div>
                    <button onClick={() => router.push('/')}>home</button>
                    <button onClick={() => router.push('/projects')}>projects</button>
                    <button onClick={() => router.push('/about')}>about</button>
                </div>
            )}

        </div>
    );
}