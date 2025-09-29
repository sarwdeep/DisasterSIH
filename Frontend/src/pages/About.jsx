export default function About() {
  const feedbacks = [
    {
      feedback: "The real-time alerts gave me confidence exploring remote areas. Excellent app!",
      name: "John D.",
      stars: 5,
      bgColor: "bg-blue-100"
    },
    {
      feedback: "The blockchain ID ensures my privacy while allowing authorities to help me quickly.",
      name: "Priya S.",
      stars: 5,
      bgColor: "bg-green-100"
    },
    {
      feedback: "Panic button works perfectly, and the dashboard keeps me safe throughout my trip.",
      name: "Ramesh K.",
      stars: 5,
      bgColor: "bg-yellow-100"
    },
    {
      feedback: "Multilingual support made it so easy for my parents to use the app!",
      name: "Anjali P.",
      stars: 5,
      bgColor: "bg-pink-100"
    },
    {
      feedback: "I loved how quickly authorities responded to my panic alert. Truly lifesaving.",
      name: "Vikram S.",
      stars: 5,
      bgColor: "bg-purple-100"
    },
    {
      feedback: "The post-incident reporting feature helped me track what happened in detail.",
      name: "Rekha M.",
      stars: 5,
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">

      {/* About Section with Video */}
      <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text */}
        <div className="text-left">
          <h1 className="text-4xl font-extrabold mb-6 text-gradient bg-clip-text text-brand-navy">
            About the Project
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            This prototype demonstrates a Smart Tourist Safety & Incident Response System 
            leveraging AI, Blockchain, and Geo-Fencing technologies to ensure tourist safety.
            The platform provides digital IDs, real-time monitoring, panic alerts, authority dashboards, 
            and optional IoT wearable integration. It ensures quick emergency responses while maintaining 
            data security and privacy.
          </p>
          <p className="text-gray-700 text-lg">
            With advanced AI anomaly detection, multilingual support, and post-incident reporting, 
            tourists can explore with confidence, and authorities can act proactively.
          </p>
        </div>

        {/* Right Video */}
        <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg">
          <video 
            src="./src/assets/Travel.mp4" 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Feedback & Ratings Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-10 text-brand-navy">Tourist Ratings & Feedback</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((item, index) => (
            <div 
              key={index} 
              className={`${item.bgColor} p-6 rounded-3xl shadow hover:shadow-xl transition transform hover:-translate-y-2`}
            >
              <p className="text-gray-800 mb-4">{item.feedback}</p>
              <p className="font-semibold text-brand-navy">— {item.name}</p>
              <p className="text-yellow-500">{'⭐'.repeat(item.stars)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
