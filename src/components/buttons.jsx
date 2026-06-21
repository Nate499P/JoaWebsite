import "../css/buttons.css";

export default function Buttons({ onOpenCommissions }) {
    return (
        <div className="hero-actions">
            <button
                className="hero-btn primary"
                onClick={onOpenCommissions}
            >
                View Commission Prices
            </button>

            <a href="#contact" className="hero-btn secondary">
                Contact Me
            </a>
        </div>
    );
}