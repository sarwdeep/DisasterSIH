import { MapContainer, TileLayer, Circle } from "react-leaflet";

export default function AuthorityDashboard() {
  const clusters = [
    { name: "Shillong Cluster", coords: [25.5788, 91.8933], radius: 500 },
    { name: "Jaipur Cluster", coords: [26.9124, 75.7873], radius: 400 },
    { name: "Delhi Cluster", coords: [28.6139, 77.2090], radius: 600 },
  ];

  const alerts = [
    "John Doe entered restricted zone (Shillong)",
    "Jane Smith: SOS Triggered (Jaipur)"
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Authority Dashboard</h2>
      <div className="grid gap-6 md:grid-cols-2">
        
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Tourist Clusters</h3>
          <MapContainer
            center={[22.9734, 78.6569]} // Center of India
            zoom={5}
            scrollWheelZoom={false}
            className="h-64 w-full rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {clusters.map((cluster, index) => (
              <Circle
                key={index}
                center={cluster.coords}
                radius={cluster.radius}
                pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.3 }}
              />
            ))}
          </MapContainer>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Alerts</h3>
          <ul className="text-gray-600 list-disc list-inside">
            {alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
