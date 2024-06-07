'use client';

import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapLeaflet = ({ geojson, onFeatureClick }) => {
  const onEachFeature = (feature, layer) => {
    layer.on({
      click: (e) => {
        onFeatureClick(feature, e);
      },
    });
  };

    // Filtrer les fonctionnalités GeoJSON par la propriété "libcom"
    const filteredGeoJSON = geojson.features.filter(feature => {
        // Remplacer "NOM_DE_LA_PROPRIETE" par le nom de la propriété que vous souhaitez filtrer
        return feature.properties.libcom === "Nantes";
      });

  return (
    <MapContainer style={{ height: "100%", width: "100%" }} center={[47.218371, -1.553621]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={{ type: 'FeatureCollection', features: filteredGeoJSON }} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default MapLeaflet;