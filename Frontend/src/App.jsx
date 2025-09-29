import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import TouristDashboard from "./pages/TouristDashboard";
import AuthorityDashboard from "./pages/AuthorityDashboard";
import About from "./pages/About";
import Premium from "./pages/Premium"; // import Premium page

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tourist" element={<TouristDashboard />} />
            <Route path="/authority" element={<AuthorityDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/premium" element={<Premium />} /> {/* add Premium route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
