import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "@pages/HomePage";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
