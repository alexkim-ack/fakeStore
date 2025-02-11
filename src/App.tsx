import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { NavBar } from "@components/NavBar";
import HomePage from "@pages/HomePage";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/test" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
