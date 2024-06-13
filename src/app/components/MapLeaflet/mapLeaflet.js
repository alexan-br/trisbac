import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getColorQuartier } from "../../utils/colorUtils"; // Importez la fonction getColorQuartier

// Fix Leaflet's default icon issue avec Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapLeaflet = ({ geojson, onFeatureClick }) => {
  const [clickedZoneId, setClickedZoneId] = useState(null);
  const [colorZone, setColorZone] = useState("#83859b"); // État pour stocker la couleur

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: (e) => {
        setClickedZoneId(feature.properties.nom);
        const color = getColorQuartier(feature.properties.nom);
        setColorZone(color); // Mettez à jour la couleur ici
        onFeatureClick(feature, color, e);
      },
    });
  };

  const style = (feature) => {
    return {
      fillColor: getColorQuartier(feature.properties.nom),
      weight: 2,
      opacity: 1,
      color: "#00000050",
      fillOpacity: 0.8,
    };
  };

  const styleUpper = (feature) => {
    return {
      fillColor: "transparent",
      weight: 2,
      opacity: 1,
      color:
        feature.properties.nom === clickedZoneId ? "#ff0000" : "transparent", // Contour en rouge si la zone est cliquée, sinon transparent
      fillOpacity: 1,
    };
  };

  // Filtrer les fonctionnalités GeoJSON par la propriété "libcom"
  const filteredGeoJSON = geojson.features.filter((feature) => {
    return feature.properties.libcom === "Nantes";
  });

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
        data={{ type: "FeatureCollection", features: filteredGeoJSON }}
        style={style}
        onEachFeature={onEachFeature}
      />
      <GeoJSON
        data={{ type: "FeatureCollection", features: filteredGeoJSON }}
        style={styleUpper}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};

export default MapLeaflet;
