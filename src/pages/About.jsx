export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      
      {/* About Section with Video */}
      <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text */}
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-6 text-brand-navy">
            About the Project
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            This prototype demonstrates a <strong className="font-bold">Smart Tourist Safety & Incident Response System</strong> 
            leveraging <strong className="font-bold">AI, Blockchain, and Geo-Fencing</strong> technologies to ensure tourist safety.
          
            The platform provides <strong className="font-bold">digital IDs, real-time monitoring, panic alerts, authority dashboards, 
            and optional IoT wearable integration</strong>. It ensures quick emergency responses while maintaining 
            <strong className="font-bold"> data security and privacy</strong>.
          </p>
          <p className="text-gray-700 text-lg">
            With advanced AI anomaly detection, multilingual support, and post-incident reporting, 
            tourists can explore with confidence, and authorities can act proactively.
          </p>
        </div>

        {/* Right Video */}
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <video 
            src="Frontend\src\assets\Travel.mp4" 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-brand-navy">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-brand-cream rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Digital Tourist ID</h3>
            <p className="text-gray-700">
              Secure, blockchain-based IDs with KYC, trip details, and emergency contacts, valid only for the trip duration.
            </p>
          </div>
          <div className="p-6 bg-brand-cream rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-700">
              Authorities can track tourist clusters, locations, and high-risk zones using the live dashboard.
            </p>
          </div>
          <div className="p-6 bg-brand-cream rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Panic Alerts & SOS</h3>
            <p className="text-gray-700">
              Tourists can send instant alerts to nearby authorities and emergency contacts with a single tap.
            </p>
          </div>
          <div className="p-6 bg-brand-cream rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Anomaly Detection</h3>
            <p className="text-gray-700">
              Detects deviations from planned routes, inactivity, or distress behavior for proactive interventions.
            </p>
          </div>
          <div className="p-6 bg-brand-cream rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
            <p className="text-gray-700">
              Supports 10+ Indian languages and English, including voice/text emergency access for elderly or disabled tourists.
            </p>
          </div>
          <div className="p-6 bg-brand-cream rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Post-Incident Reporting</h3>
            <p className="text-gray-700">
              Automated logging and reporting of incidents, enabling detailed analysis and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback & Ratings Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-10 text-brand-navy">Tourist Ratings & Feedback</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-700 mb-4">
              "The real-time alerts gave me confidence exploring remote areas. Excellent app!"
            </p>
            <p className="font-semibold text-brand-navy">— John D.</p>
            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-700 mb-4">
              "The blockchain ID ensures my privacy while allowing authorities to help me quickly."
            </p>
            <p className="font-semibold text-brand-navy">— Priya S.</p>
            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-700 mb-4">
              "Panic button works perfectly, and the dashboard keeps me safe throughout my trip."
            </p>
            <p className="font-semibold text-brand-navy">— Ramesh K.</p>
            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </section>
    </div>
  );
}
