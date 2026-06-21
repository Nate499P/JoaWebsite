import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
    const [heroView, setHeroView] = useState("hero");

    return (
        <>
            <Navbar setHeroView={setHeroView} />

            <main>
                <Hero
                    heroView={heroView}
                    setHeroView={setHeroView}
                />
            </main>
        </>
    );
}

export default App;