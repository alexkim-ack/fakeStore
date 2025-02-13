import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { NavBar } from "@components/NavBar";
import { HomePage, LoginPage } from "@pages";

function App() {
    return (
        <CookiesProvider>
            <Router>
                <div>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </Router>
        </CookiesProvider>
    );
}

export default App;
