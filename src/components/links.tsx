'use client';
import './nav.css';
import Image from "@/components/image";

export default function Links() {

    return (
        <nav className="link-container">
            <div className="link-buttons">
                <a className="sm-link" href="https://www.linkedin.com/in/ana-constantinescu-ab3046198/">
                    <Image key={1}
                        url={"linkedin.png"}
                        height={48}
                        width={48}></Image></a>
                <a className="sm-link" href="https://github.com/fluffyponyy">
                    <Image key={2}
                        url={"github.png"}
                        height={48}
                        width={48}></Image>
                </a>
                <a className="sm-link" href="">
                    <Image key={3}
                        url={"email.png"}
                        height={48}
                        width={48}></Image></a>
            </div >
        </nav >
    );
}
