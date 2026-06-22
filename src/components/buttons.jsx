import "../css/buttons.css";

export default function Buttons({ onOpenCommissions, onOpenContact }) {
    return (
        <div className="hero-actions">
            <button className="hero-btn primary" onClick={onOpenCommissions}>
                View Commission Prices
            </button>

            <button className="hero-btn secondary" onClick={onOpenContact}>
                Contact Me
            </button>
        </div>
    );
}