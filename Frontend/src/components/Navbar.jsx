import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="shadow-md"
      style={{ backgroundColor: "var(--brand-navy)", color: "white" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold tracking-wide"
          style={{ color: "var(--brand-cream)" }}
        >
          Tourist Surveillance
        </Link>
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-var-cream transition"
            style={{ color: "white" }}
          >
            Home
          </Link>
          <Link
            to="/tourist"
            className="hover:text-var-cream transition"
            style={{ color: "white" }}
          >
            Tourist App
          </Link>
          <Link
            to="/authority"
            className="hover:text-var-cream transition"
            style={{ color: "white" }}
          >
            Authority
          </Link>
          <Link
            to="/about"
            className="hover:text-var-cream transition"
            style={{ color: "white" }}
          >
            About
          </Link>
          <Link
            to="/premium"
            className="hover:text-var-cream transition"
            style={{ color: "white" }}
          >
            Premium
          </Link>
        </div>
      </div>
    </nav>
  );
}
