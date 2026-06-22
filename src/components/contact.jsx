import "../css/contact.css";

export default function Contact({ onBack }) {
    return (
        <div className="contact-view">
            <div className="contact-header">
                <p className="contact-kicker">Contact</p>
                <h2>Let’s Work Together</h2>
                <p>
                    Reach out for commission questions, availability, or custom requests.
                </p>
            </div>

            <div className="contact-grid">
                <a className="contact-card" href="mailto:your@email.com">
                    <span>Email</span>
                    <strong>your@email.com</strong>
                </a>

                <a className="contact-card" href="#" target="_blank">
                    <span>Twitter / X</span>
                    <strong>@yourhandle</strong>
                </a>

                <a className="contact-card" href="#" target="_blank">
                    <span>Discord</span>
                    <strong>yourname</strong>
                </a>
            </div>

            <div className="contact-footer">
                <button className="contact-back" onClick={onBack}>
                    ← Return to Main Menu
                </button>
            </div>
        </div>
    );
}