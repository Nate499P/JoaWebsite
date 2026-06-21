import "../css/commission-menu.css";

export default function CommissionMenu({ onBack }) {
    return (
        <div className="commission-view">
            <div className="commission-header">
                <div>
                    <p className="commission-kicker">Commission Menu</p>
                    <h2>Choose Your Style</h2>
                    <h3>additional characters cost 60% more, all renders are 15 USD more! </h3>
                </div>
            </div>

            <div className="commission-grid">
                <div className="commission-card">
                    <img
                        src="/images/MSPAINTIMAGE.jpg"
                        alt="MS Paint commission"
                        className="commission-card-img"
                    />

                    <div className="commission-overlay">
                        <div className="commission-title">
                            <h3>MS PAINT ART</h3>
                            <p>Less detailed MS Paint drawings using a mouse</p>
                        </div>

                        <div className="commission-price-row">
                            <div className="price-segment">
                                <span>Small Chibi</span>
                                <strong>$20</strong>
                            </div>

                            <div className="price-segment">
                                <span> </span>
                                <strong> </strong>
                            </div>

                            <div className="price-segment">
                                <span>Portrait</span>
                                <strong>Starts at 60$</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="commission-card">
                    <img
                        src="/images/CHIBI.jpg"
                        alt="chibi commission"
                        className="commission-card-img"
                    />

                    <div className="commission-overlay">
                        <div className="commission-title">
                            <h3>CHIBI</h3>
                            <p>Prices vary based on complexity</p>
                        </div>

                        <div className="commission-price-row">
                            <div className="price-segment">
                                <span>Headshot</span>
                                <strong>$30 basic</strong>
                            </div>

                            <div className="price-segment">
                                <span>Half Body</span>
                                <strong>$50 basic</strong>
                            </div>

                            <div className="price-segment">
                                <span>Full Body</span>
                                <strong>$60 basic</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="commission-card">
                    <img
                        src="/images/STANDARD.jpg"
                        alt="Standard commission"
                        className="commission-card-img"
                    />

                    <div className="commission-overlay">
                        <div className="commission-title">
                            <h3>NORMAL STYLE</h3>
                            <p>
                                Prices may vary with detail. No Renders!
                            </p>
                        </div>

                        <div className="commission-price-row">
                            <div className="price-segment">
                                <span>Headshot</span>
                                <strong>$35 basic</strong>
                            </div>

                            <div className="price-segment">
                                <span>Half Body</span>
                                <strong>$60 basic</strong>
                            </div>

                            <div className="price-segment">
                                <span>Full Body</span>
                                <strong>$75 basic</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="commission-footer">
                <div className="social-links">{/* social links */}</div>

                <button className="commission-back" onClick={onBack}>
                    ← Return to Main Menu
                </button>
            </div>
        </div>
    );
}
