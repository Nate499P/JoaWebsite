import "../css/navbar.css";

const icons = [
    "/images/poro1.png",
    "/images/poro2.png",
    "/images/poro3.png",
    "/images/poro4.png",
    "/images/poro5.png",
    "/images/poro6.png"
];

const repeatedImages = [...icons, ...icons, ...icons, ...icons];

export default function Navbar({ returnHome }) {
    return (
        <nav className="navbar">
            {/* LEFT */}
            <div className="nav-links">
                <button
                    className="nav-link"
                    onClick={() => {
                        returnHome();

                        document.getElementById("home")?.scrollIntoView({
                            behavior: "smooth"
                        });
                    }}>
                    HOME
                </button>
            </div>

            {/* CENTER */}
            <div className="nav-center">
                <div className="nav-image-track">
                    {[...Array(2)].map((_, groupIndex) => (
                        <div className="nav-image-group" key={groupIndex}>
                            {[...Array(6)].flatMap(() =>
                                repeatedImages.map((src, index) => (
                                    <img
                                        key={`${groupIndex}-${index}-${src}`}
                                        src={src}
                                        alt=""
                                        className="nav-image"
                                    />
                                ))
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <a href="/" className="nav-logo">
                <img src="/images/Joa_Logo2.png" alt="Joa Logo" />
            </a>
        </nav>
    );
}
