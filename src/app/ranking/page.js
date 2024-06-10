"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import HeaderRanking from "../components/HeaderRanking/headerRanking";

import Styles from "./ranking.module.scss";

const MapLeaflet = dynamic(
  () => import("../components/MapLeaflet/mapLeaflet"),
  { ssr: false }
);

const MapLeafletCommunes = dynamic(
  () => import("../components/MapLeafletCommunes/mapLeafletCommunes"),
  { ssr: false }
);

const Ranking = () => {
  const [geojson, setGeojson] = useState(null);
  const [geojsonCommunes, setGeojsonCommunes] = useState(null);
  const [showCommunes, setShowCommunes] = useState(true); // État pour déterminer quelle carte afficher

  useEffect(() => {
    fetch("/geojson/244400404_quartiers-communes-nantes-metropole.geojson")
      .then((response) => response.json())
      .then((data) => setGeojson(data));

    fetch("/geojson/244400404_communes-nantes-metropole.geojson")
      .then((response) => response.json())
      .then((data) => setGeojsonCommunes(data));
  }, []);

  const handleFeatureClick = (feature, e) => {
    alert(`Clicked on ${feature.properties.name}`);
  };

  return (
    <main>
      <HeaderRanking urlPage="/" />
      <div className={Styles.ContainerSwitchMap}>
        <button
          className={`${Styles.ButtonSwitchMap} ${
            showCommunes ? Styles.ButtonSwitchMapActive : ""
          }`}
          onClick={() => setShowCommunes(true)}
        >
          Par communes
        </button>
        <button
          className={`${Styles.ButtonSwitchMap} ${
            !showCommunes ? Styles.ButtonSwitchMapActive : ""
          }`}
          onClick={() => setShowCommunes(false)}
        >
          Quartiers nantais
        </button>
      </div>
      <div className={Styles.ContainerMap}>
        {showCommunes && geojsonCommunes && (
          <MapLeafletCommunes
            geojson={geojsonCommunes}
            onFeatureClick={handleFeatureClick}
          />
        )}
        {!showCommunes && geojson && (
          <MapLeaflet geojson={geojson} onFeatureClick={handleFeatureClick} />
        )}
      </div>
    </main>
  );
};

export default Ranking;
