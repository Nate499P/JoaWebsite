import { useState } from "react";
import "../css/hero.css";

import Buttons from "./Buttons";
import CommissionMenu from "./CommissionMenu";
import Contact from "./Contact";

export default function Hero({ heroView, setHeroView }) {
    const [isFading, setIsFading] = useState(false);

    function openCommissions() {
        setIsFading(true);

        setTimeout(() => {
            setHeroView("commissions");

            setTimeout(() => {
                setIsFading(false);
            }, 120);
        }, 600);
    }

    function openContact() {
        setIsFading(true);

        setTimeout(() => {
            setHeroView("contact");

            setTimeout(() => {
                setIsFading(false);
            }, 150);
        }, 800);
    }

    function backToHero() {
        setIsFading(true);

        setTimeout(() => {
            setHeroView("hero");

            setTimeout(() => {
                setIsFading(false);
            }, 150);
        }, 800);
    }

    return (
        <section className="hero-section" id="home">
            <div className="hero-panel">
                <div
                    className={`hero-view ${isFading || heroView === "transition-home" ? "is-fading" : "fade-in"}`}>
                    {heroView === "hero" && (
                        <div className="hero-layout">
                            <div className="hero-content">
                                <p className="hero-kicker">Joa Commission Site!</p>

                                <h1>
                                    CEO of all things Zeri and Yunara,
                                    <span> and all the yuri that comes with it.</span>
                                </h1>

                                <p className="hero-description">
                                    Below you'll find my different rates, offers, and services. If
                                    you have any questions, feel free to reach out to me via the
                                    contact form below!
                                </p>

                                <Buttons
                                    onOpenCommissions={openCommissions}
                                    onOpenContact={openContact}
                                />
                            </div>

                            <div className="hero-display">
                                <div className="champion-card">
                                    <div className="card-header">Featured Commission</div>

                                    <div className="card-preview">
                                        <img
                                            src="/images/Sketch_Feature.png"
                                            alt="Featured Commission"
                                            className="featured-image"
                                        />
                                    </div>

                                    <div className="card-footer">
                                        <p>Normal style</p>
                                        <small>headshot 35$ • Halfbody 60$ • fullbody 75$</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {heroView === "commissions" && <CommissionMenu onBack={backToHero} />}

                    {heroView === "contact" && <Contact onBack={backToHero} />}
                </div>
            </div>
        </section>
    );
}
