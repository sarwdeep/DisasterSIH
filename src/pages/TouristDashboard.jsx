import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";

export default function TouristDashboard() {
  const tourist = {
    name: "John Doe",
    city: "Shillong, Meghalaya",
    coords: [25.5788, 91.8933],
    validTill: "12 Oct 2025",
    plannedStops: ["Ward's Lake", "Elephant Falls", "Shillong Peak"],
    safetyScore: 8.7,
    currentRisk: "Moderate",
    temperature: "22°C",
    alerts: [
      "Entered a moderate-risk zone at 10:15 AM",
      "Deviation from planned route detected at 11:30 AM"
    ],
    emergencyContacts: [
      { name: "Local Police", number: "100" },
      { name: "Ambulance", number: "108" },
      { name: "Family Contact", number: "+91-9876543210" }
    ]
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Tourist Dashboard</h2>
      <div className="grid gap-6 md:grid-cols-2">

        {/* Digital Tourist ID */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Digital Tourist ID</h3>
          <p className="text-gray-600">Name: {tourist.name}</p>
          <p className="text-gray-600">Trip: {tourist.city}</p>
          <p className="text-gray-600">Valid Till: {tourist.validTill}</p>
          <h4 className="mt-4 font-semibold text-gray-700">Planned Stops:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {tourist.plannedStops.map((stop, index) => (
              <li key={index}>{stop}</li>
            ))}
          </ul>
        </div>

        {/* Safety & Weather */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Safety & Weather</h3>
          <p className="text-green-600 text-2xl font-bold mb-2">
            Safety Score: {tourist.safetyScore} / 10
          </p>
          <p className="text-gray-600 mb-2">
            Current Zone Risk: <span className="font-bold text-yellow-600">{tourist.currentRisk}</span>
          </p>
          <p className="text-gray-600">Temperature: {tourist.temperature}</p>
        </div>

        {/* Panic Button */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Panic Button</h3>
          <button className="px-6 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700">
            🚨 Send SOS
          </button>
          <h4 className="mt-4 font-semibold text-gray-700">Emergency Contacts:</h4>
          <ul className="text-gray-600">
            {tourist.emergencyContacts.map((contact, index) => (
              <li key={index}>{contact.name}: {contact.number}</li>
            ))}
          </ul>
        </div>

        {/* Live Location Map */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Live Location & Geo-Fencing</h3>
          <MapContainer
            center={tourist.coords}
            zoom={14}
            scrollWheelZoom={false}
            className="h-64 w-full rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={tourist.coords}>
              <Popup>{tourist.name} is here ({tourist.city})</Popup>
            </Marker>
            {/* Example Geo-Fencing */}
            <Circle
              center={tourist.coords}
              radius={300}
              pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.2 }}
            />
          </MapContainer>

          {/* Recent Alerts */}
          <h4 className="mt-4 font-semibold text-gray-700">Recent Alerts:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {tourist.alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
