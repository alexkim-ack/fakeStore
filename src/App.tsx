import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { NavBar } from "@components/NavBar";
import { HomePage, LoginPage } from "@pages";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <CookiesProvider>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </Router>
            </CookiesProvider>
        </QueryClientProvider>
    );
}

export default App;
