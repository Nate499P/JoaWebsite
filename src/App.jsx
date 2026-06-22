import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
    const [heroView, setHeroView] = useState("hero");

    function returnHome() {
        setHeroView("transition-home");

        setTimeout(() => {
            setHeroView("hero");
        }, 450);
    }

    return (
        <>
            <Navbar returnHome={returnHome} />

            <main>
                <Hero heroView={heroView} setHeroView={setHeroView} />
            </main>
        </>
    );
}

export default App;
