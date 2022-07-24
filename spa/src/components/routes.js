import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                </Route>
            </Routes>
        </Router>
    )
}