import { MapContainer, TileLayer, Polyline, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from "react"

interface Coord {
  lat: number;
  lon: number;
  time1: number;
  time2: number;
}

function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp);
  return date.toTimeString().split(' ')[0];
}

const Map = ({ data, onReset }: { data: Coord[], onReset: () => {}}) => {
  const [hoveredSegment, setHoveredSegment] = useState(-1);

  // Center the map on the first coordinate
  const center = data.length > 0
    ? [data[0].lat, data[0].lon]
    : [0, 0];

  // Extract coordinates from data
  return (
      <MapContainer
          // @ts-ignore
          center={center}
          zoom={13}
          style={{ height: '100vh', width: '100%', margin: 'none', padding: 'none' }}
      >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((coord, index) => (
            <Marker key={index} position={coord}>
              {/* @ts-ignore */}
              <Tooltip permanent>
                {formatTimestamp(coord.time1)}
              </Tooltip>
            </Marker>
        ))}
        {data.slice(0, -1).map((coord, index) => (
            <Polyline
                key={index}
                positions={[coord, data[index + 1]]}
                /* @ts-ignore */
                color={hoveredSegment === index ? 'red' : 'blue'}
                weight={3}
                onMouseOver={() => setHoveredSegment(index)}
                onMouseOut={() => setHoveredSegment(-1)}
            />
        ))}

        <button
          className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          style={{ position: "absolute", top: 20, right: 20, zIndex: 1000, width: 40, height: 40, padding: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "black" }}
          onClick={() => onReset()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </MapContainer>
  );
};

export default Map;