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
    case "NANTES":
      return GreenColor;
    case "REZE":
      return YellowColor;
    case "SAINT-HERBLAIN":
      return YellowColor;
    case "ORVAULT":
      return OrangeColor;
    case "SAUTRON":
      return OrangeColor;
    case "COUERON":
      return OrangeColor;
    case "BOUGUENAIS":
      return YellowColor;
    case "SAINT-SEBASTIEN-SUR-LOIRE":
      return YellowColor;
    case "VERTOU":
      return GreenColor;
    case "BOUAYE":
      return OrangeColor;
    case "LA MONTAGNE":
      return OrangeColor;
    case "BOUAYE":
      return OrangeColor;
    case "CARQUEFOU":
      return OrangeColor;
    case "SAINTE-LUCE-SUR-LOIRE":
      return OrangeColor;
    case "BASSE-GOULAINE":
      return OrangeColor;
    case "SAINTE-PAZANNE":
      return OrangeColor;
    case "MAUVES-SUR-LOIRE":
      return OrangeColor;
    case "COUERON":
      return OrangeColor;
    case "LA CHAPELLE-SUR-ERDRE":
      return OrangeColor;
    case "ORVAULT":
      return OrangeColor;
    case "SAUTRON":
      return OrangeColor;
    case "LE PELLERIN":
      return OrangeColor;
    case "SAINT-JEAN-DE-BOISEAU":
      return OrangeColor;
    case "INDRE":
      return OrangeColor;
    case "THOUARE-SUR-LOIRE":
      return OrangeColor;
    case "SAINT-AIGNAN-GRANDLIEU":
      return OrangeColor;
    case "SAINT-LEGER-LES-VIGNES":
      return OrangeColor;
    case "BRAINS":
      return OrangeColor;
    case "LES SORINIERES":
      return OrangeColor;
    default:
      return "#FFFFFF";
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

const MapLeafletCommunes = ({ geojson, onFeatureClick }) => {
  const onEachFeature = (feature, layer) => {
    layer.on({
      click: (e) => {
        onFeatureClick(feature, e);
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
