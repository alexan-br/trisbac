"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Styles from "./ranking.module.scss";

const MapLeaflet = dynamic(
  () => import("../components/MapLeaflet/mapLeaflet"),
  { ssr: false }
);

const Ranking = () => {
  const [geojson, setGeojson] = useState(null);

  useEffect(() => {
    fetch("/geojson/244400404_quartiers-communes-nantes-metropole.geojson")
      .then((response) => response.json())
      .then((data) => setGeojson(data));
  }, []);

  const handleFeatureClick = (feature, e) => {
    alert(`Clicked on ${feature.properties.name}`);
  };

  return (
    <main>
      <div className={Styles.ContainerMap}>
        {geojson && (
          <MapLeaflet geojson={geojson} onFeatureClick={handleFeatureClick} />
        )}
      </div>
    </main>
  );
};

export default Ranking;
