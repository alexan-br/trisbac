import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getColor } from "../../utils/colorUtils"; // Importez la fonction getColor

// Fix Leaflet's default icon issue avec Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const style = (feature) => {
  return {
    fillColor: getColor(feature.properties.nom),
    weight: 2,
    opacity: 1,
    color: "#83859b",
    fillOpacity: 0.8,
  };
};

const MapLeafletCommunes = ({ geojson, onFeatureClick }) => {
  const onEachFeature = (feature, layer) => {
    layer.on({
      click: (e) => {
        const color = getColor(feature.properties.nom); // Récupérez la couleur ici
        onFeatureClick(feature, color, e); // Passez la couleur au parent
      },
    });
  };

  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={[47.218371, -1.553621]}
      zoom={12}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        data={{ type: "FeatureCollection", features: geojson.features }}
        style={style}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};

export default MapLeafletCommunes;
