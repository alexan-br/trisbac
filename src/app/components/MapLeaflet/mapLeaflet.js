"use client";

import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's default icon issue avec Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const GreenColor = "#8BC34A";
const LightGreenColor = "#C5E1A5";
const YellowColor = "#FFF176";
const OrangeColor = "#FFEB3B";

const getColor = (nom) => {
  switch (nom) {
    case "Nantes Nord":
      return GreenColor;
    case "Nantes Erdre":
      return LightGreenColor;
    case "Malakoff - Saint-Donatien":
      return YellowColor;
    case "Doulon - Bottière":
      return OrangeColor;
    case "Centre Ville":
      return OrangeColor;
    case "Ile de Nantes":
      return OrangeColor;
    case "Dervallières - Zola":
      return YellowColor;
    case "Hauts Pavés - Saint Félix":
      return LightGreenColor;
    case "Breil - Barberie":
      return GreenColor;
    case "Nantes Sud":
      return OrangeColor;
    case "Bellevue - Chantenay - Sainte Anne":
      return OrangeColor;
    default:
      return OrangeColor; // Bleu pour les autres
  }
};

const style = (feature) => {
  return {
    fillColor: getColor(feature.properties.nom),
    weight: 2,
    opacity: 1,
    color: "#83859b",
    fillOpacity: 0.8,
  };
};

const MapLeaflet = ({ geojson, onFeatureClick }) => {
  const onEachFeature = (feature, layer) => {
    layer.on({
      click: (e) => {
        onFeatureClick(feature, e);
      },
    });
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
    </MapContainer>
  );
};

export default MapLeaflet;
