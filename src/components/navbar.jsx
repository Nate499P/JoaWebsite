import "../css/navbar.css";

export default function Navbar({ setHeroView }) {
    return (
        <nav className="navbar">
            {/* LEFT */}
            <div className="nav-links">
                <button
                    className="nav-link"
                    onClick={() => {
                        setHeroView("hero");

                        document.getElementById("home")?.scrollIntoView({
                            behavior: "smooth"
                        });
                    }}>
                    HOME
                </button>
            </div>

            {/* CENTER */}
            <div className="nav-center">{/* Empty for now */}</div>

            {/* RIGHT */}
            <a href="/" className="nav-logo">
                <img src="/images/Joa_Logo2.png" alt="Joa Logo" />
            </a>
        </nav>
    );
}
