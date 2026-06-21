import { useState } from "react";
import "../css/navbar.css";

export default function Navbar() {
    const [active, setActive] = useState("Home");

    const links = [
        { label: "Home", href: "#" },
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <nav className="navbar">
            <a href="#" className="nav-logo">
                <img src="./public/images/Joa_logo2.png" alt="Logo" />
            </a>

            <div className="nav-links">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={`nav-link ${active === link.label ? "active" : ""}`}
                        onClick={() => setActive(link.label)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}