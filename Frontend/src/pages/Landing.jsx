import { Link } from "react-router-dom";
import { ShieldCheck, MapPin, Zap, Globe, Lock, BarChart3 } from "lucide-react";

export default function Landing() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-center py-20"
        style={{
          background: "linear-gradient(to right, var(--brand-navy), var(--brand-blue))",
          color: "white",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Smart Tourist Safety & Incident Response Platform
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-lg md:text-xl">
          A cloud-native safety ecosystem powered by AI, Blockchain, and Geo-Fencing 
          to protect tourists and accelerate emergency responses in real-time.
        </p>
        <div className="space-x-4">
          <Link
            to="/tourist"
            className="px-6 py-3 font-semibold rounded-lg shadow transition"
            style={{ backgroundColor: "white", color: "var(--brand-navy)" }}
          >
            Explore Tourist App
          </Link>
          <Link
            to="/authority"
            className="px-6 py-3 font-semibold rounded-lg shadow transition"
            style={{ backgroundColor: "white", color: "var(--brand-navy)" }}
          >
            Visit Authority Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--brand-cream)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--brand-navy)" }}
          >
            Proposed Solution & Key Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <ShieldCheck
                className="w-10 h-10 mb-4"
                style={{ color: "var(--brand-navy)" }}
              />
              <h3 className="text-xl font-semibold mb-2">Blockchain-Secured Digital ID</h3>
              <p className="text-gray-700">
                Tamper-proof digital IDs with KYC, trip itinerary, medical details, 
                and emergency contacts – valid only for the trip duration.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <MapPin
                className="w-10 h-10 mb-4"
                style={{ color: "var(--brand-blue)" }}
              />
              <h3 className="text-xl font-semibold mb-2">Geo-Fencing Alerts</h3>
              <p className="text-gray-700">
                Dynamic geo-fences to alert tourists when entering restricted/high-risk zones 
                while instantly notifying authorities.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Zap
                className="w-10 h-10 mb-4"
                style={{ color: "var(--brand-orange)" }}
              />
              <h3 className="text-xl font-semibold mb-2">Real-Time Emergency Communication</h3>
              <p className="text-gray-700">
                Instant panic button with live video, voice translation, and real-time 
                communication with police and emergency responders.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Globe
                className="w-10 h-10 mb-4"
                style={{ color: "var(--brand-navy)" }}
              />
              <h3 className="text-xl font-semibold mb-2">Centralized Authority Dashboard</h3>
              <p className="text-gray-700">
                Real-time visualization of tourist clusters, heatmaps of high-risk zones, 
                and automated E-FIR generation for missing persons.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <BarChart3
                className="w-10 h-10 mb-4"
                style={{ color: "var(--brand-peach)" }}
              />
              <h3 className="text-xl font-semibold mb-2">Predictive Risk Analytics</h3>
              <p className="text-gray-700">
                AI-driven models to forecast risks using weather patterns, crowd density, 
                and location history for proactive safety.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Lock
                className="w-10 h-10 mb-4"
                style={{ color: "var(--brand-navy)" }}
              />
              <h3 className="text-xl font-semibold mb-2">Digital Evidence Logging</h3>
              <p className="text-gray-700">
                Every alert and incident is logged securely for post-incident 
                reporting, analysis, and accountability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--brand-navy)" }}
          >
            Our Vision
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-8">
            In regions like the Northeast where tourism drives economic growth, 
            ensuring visitor safety is critical. Our platform combines technology, 
            rapid response, and secure identity management to safeguard every journey. 
            With AI-driven anomaly detection, multilingual accessibility, and optional IoT 
            integration, we aim to redefine safe and smart tourism in India.
          </p>
          <Link
            to="/about"
            className="px-6 py-3 rounded-lg shadow transition"
            style={{ backgroundColor: "var(--brand-orange)", color: "white" }}
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
