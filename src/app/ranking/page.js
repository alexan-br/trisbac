"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getColor, getColorQuartier } from "../utils/colorUtils"; // Importez la fonction getColor
import HeaderRanking from "../components/HeaderRanking/headerRanking";
import SearchBar from "../components/SearchBar/searchBar";

import Styles from "./ranking.module.scss";

const MapLeaflet = dynamic(
  () => import("../components/MapLeaflet/mapLeaflet"),
  { ssr: false }
);

const MapLeafletCommunes = dynamic(
  () => import("../components/MapLeafletCommunes/mapLeafletCommunes"),
  { ssr: false }
);

const getPostalCodeInfo = async (postalCode) => {
  const response = await fetch(
    `https://geo.api.gouv.fr/communes?code=${postalCode}`
  );
  const data = await response.json();

  return data[0].population;
};

const colorMap = {
  "#388e3c": "A",
  "#8bc34a": "B",
  "#ffeb3b": "C",
  "#ffd700": "D",
};

const Ranking = () => {
  const [geojson, setGeojson] = useState(null);
  const [geojsonCommunes, setGeojsonCommunes] = useState(null);
  const [showCommunes, setShowCommunes] = useState(true); // État pour déterminer quelle carte afficher
  const [InfosName, setInfosName] = useState("Selectionnez une zone");
  const [colorZone, setColorZone] = useState("#ffd700");
  const [populationZone, setpopulationZone] = useState(null);

  useEffect(() => {
    fetch("/geojson/244400404_quartiers-communes-nantes-metropole.geojson")
      .then((response) => response.json())
      .then((data) => setGeojson(data));

    fetch("/geojson/244400404_communes-nantes-metropole.geojson")
      .then((response) => response.json())
      .then((data) => setGeojsonCommunes(data));
  }, []);

  const handleFeatureClick = (feature, color, e) => {
    if (showCommunes) {
      setInfosName(feature.properties.toponyme);
      setpopulationZone(getPostalCodeInfo(feature.properties.id_insee));
      setColorZone(color); // Mettez à jour la couleur ici
    } else {
      setInfosName(feature.properties.nom);
      setColorZone(color); // Mettez à jour la couleur ici
      //Arondir le nombre d'habitant
      setpopulationZone((323204 / 11).toFixed(0));
    }
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
          Commune
        </button>
        <button
          className={`${Styles.ButtonSwitchMap} ${
            !showCommunes ? Styles.ButtonSwitchMapActive : ""
          }`}
          onClick={() => setShowCommunes(false)}
        >
          Quartier
        </button>
      </div>
      <SearchBar />

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
      {InfosName !== "Selectionnez une zone" ? (
        <div className={Styles.ContainerZoneInfos}>
          <div
            className={Styles.ContentZoneInfos}
            style={{ borderColor: `${colorZone}` }}
          >
            <div className={Styles.ContainerNames}>
              <h2 className={Styles.ZoneName}>{InfosName}</h2>
              <p className={Styles.NbHabitant}>{populationZone} habitants</p>
            </div>
            {colorMap[colorZone] && (
              <p style={{ color: colorZone }}>{colorMap[colorZone]}</p>
            )}
            <Image
              src="/icons/arrow.svg"
              alt="elephant"
              width={22}
              height={22}
            />
          </div>
        </div>
      ) : (
        <div className={Styles.ContainerZoneInfos}>
          <div
            className={Styles.ContentZoneInfos}
            style={{ borderColor: `#ffffff` }}
          >
            <div className={Styles.ContainerNames}>
              <h2 className={Styles.ZoneName}>{InfosName}</h2>{" "}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Ranking;
