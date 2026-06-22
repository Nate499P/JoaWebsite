import "../css/contact.css";

export default function Contact({ onBack }) {
    return (
        <div className="contact-view">
            <div className="contact-header">
                <p className="contact-kicker">Contact</p>
                <h2>Let’s Work Together</h2>
                <p>Reach out for commission questions, availability, or custom requests.</p>
            </div>

            <div className="contact-grid">
                <a className="contact-card" href="https://vgen.co/dreepies/portfolio">
                    <span className="contact-label">
                        <img src="/images/VGen.png" alt="" className="contact-icon" />
                        Vgen
                    </span>
                    <strong>@Dreepies Vgen</strong>
                </a>

                <a className="contact-card" href="https://x.com/dreepies" target="_blank">
                    <span className="contact-label">
                        <img src="/images/X logo.png" alt="" className="contact-icon" />
                        Twitter / X
                    </span>
                    <strong>@Dreepies</strong>
                </a>

                <a className="contact-card" href="https://ko-fi.com/dreepies" target="_blank">
                    <span className="contact-label">
                        <img src="/images/kofi.png" alt="" className="contact-icon" />
                        Kofi
                    </span>
                    <strong>Joa</strong>
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
