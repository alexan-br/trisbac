"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getColor, getColorQuartier } from "../utils/colorUtils"; // Importez la fonction getColor
import HeaderRanking from "../components/HeaderRanking/headerRanking";
import SearchBar from "../components/SearchBar/searchBar";
import SearchBarQuartier from "../components/SearchBarQuartier/searchBarQuartier";
import Link from "next/link";

import Styles from "./ranking.module.scss";
import RankingModale from "../components/RankingModale/rankingModale";

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
  const [selectedYear, setSelectedYear] = useState(2024); // État pour l'année sélectionnée
  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const [EnvoieNomSearchBarCommunes, setEnvoieNomSearchBarCommunes] =
    useState("");
  const [EnvoieNomSearchBarQuartier, setEnvoieNomSearchBarQuartier] =
    useState("");

  const handleSuggestionSelected = (suggestion) => {
    console.log(`Suggestion sélectionnée Main Map : ${suggestion}`);
    if (showCommunes) {
      setEnvoieNomSearchBarCommunes(suggestion);
    } else {
      setEnvoieNomSearchBarQuartier(suggestion);
    }
  };

  const ormData = [
    {
      year: 2023,
      month: [
        { name: "Jan", quantity: 85, color: "#388E3C", textColor: "#FFFFFF" },
        { name: "Fev", quantity: 120, color: "#8BC34A", textColor: "#000000" },
        { name: "Mar", quantity: 130, color: "#8BC34A", textColor: "#000000" },
        { name: "Avr", quantity: 120, color: "#8BC34A", textColor: "#000000" },
        { name: "Mai", quantity: 95, color: "#388E3C", textColor: "#FFFFFF" },
        { name: "Jui", quantity: 140, color: "#8BC34A", textColor: "#000000" },
        { name: "Jui", quantity: 190, color: "#FFEB3B", textColor: "#000000" },
        { name: "Aou", quantity: 85, color: "#388E3C", textColor: "#FFFFFF" },
        { name: "Sep", quantity: 85, color: "#388E3C", textColor: "#FFFFFF" },
        { name: "Oct", quantity: 85, color: "#388E3C", textColor: "#FFFFFF" },
        { name: "Nov", quantity: 85, color: "#388E3C", textColor: "#FFFFFF" },
        { name: "Dec", quantity: 85, color: "#388E3C", textColor: "#FFFFFF" },
      ],
    },
    {
      year: 2024,
      month: [
        { name: "Jan", quantity: 85, color: "#388E3C", textColor: "#FFFFFF" },
        { name: "Fev", quantity: 120, color: "#8BC34A", textColor: "#000000" },
        { name: "Mar", quantity: 130, color: "#8BC34A", textColor: "#000000" },
        { name: "Avr", quantity: 120, color: "#8BC34A", textColor: "#000000" },
        { name: "Mai", quantity: 95, color: "#388E3C", textColor: "#FFFFFF" },
        { name: "Jui", quantity: 140, color: "#8BC34A", textColor: "#000000" },
        { name: "Jui", quantity: 190, color: "#FFEB3B", textColor: "#000000" },
        { name: "Aou", quantity: 130, color: "#8BC34A", textColor: "#000000" },
        { name: "Sep", quantity: 170, color: "#FFEB3B", textColor: "#000000" },
        { name: "Oct", quantity: 140, color: "#8BC34A", textColor: "#000000" },
        { name: "Nov", quantity: 150, color: "#FFEB3B", textColor: "#000000" },
        { name: "Dec", quantity: 200, color: "#FFD700", textColor: "#000000" },
      ],
    },
  ];

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  const getYearData = (year) => {
    return ormData.find((data) => data.year === year);
  };

  const yearData = getYearData(selectedYear);
  const averageQuantity =
    yearData?.month.reduce((acc, month) => acc + month.quantity, 0) /
      yearData?.month.length || 0;

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

  function OpenModaleOnClick() {
    setIsModaleOpen(true);
    const modale = document.getElementById("modaleranking");

    modale.style.top = "65px";
    modale.style.height = "100vh";
  }

  function CloseModaleOnClick() {
    setIsModaleOpen(false);
    const modale = document.getElementById("modaleranking");
    modale.style.top = "95vh";
    modale.style.height = "0vh";
  }

  const getColorClass = (color) => {
    switch (color) {
      case "#388e3c":
        return Styles.colorA;
      case "#8bc34a":
        return Styles.colorB;
      case "#ffeb3b":
        return Styles.colorC;
      case "#ffd700":
        return Styles.colorD;
      default:
        return "";
    }
  };

  return (
    <main className={Styles.Main}>
      <HeaderRanking
        urlPage={!isModaleOpen ? "/" : ""}
        isModaleOpen={isModaleOpen}
        CloseModaleOnClick={CloseModaleOnClick}
      />
      <RankingModale
        id="modaleranking"
        modale={{
          name: InfosName,
        }}
      >
        <div className={Styles.rankVisualizerContainer}>
          <h4>Rang {!showCommunes ? "du quartier " : "de la commune"}</h4>
          <div
            className={`${Styles.rankVisualizer} ${getColorClass(colorZone)}`}
          ></div>
          <p>
            Ce rang est calculé à partir de la quantité d’ordures ménagères
            résiduelles (OMR) produites
          </p>
          <Link href="/">Comment ce rang est-il établi ?</Link>
        </div>

        <div>
          <h4>Démographie</h4>
          <div className={Styles.dataTable}>
            <div className={Styles.dataRow}>
              <h5>Nombre d'habitant</h5>
              <div>{populationZone}</div>
            </div>
            <div className={Styles.dataRow}>
              <h5>Surface (km²)</h5>
              <div>145</div>
            </div>
            <div className={Styles.dataRow}>
              <h5>Système de tri</h5>
              <div>Bacs et poubelles</div>
            </div>
            <div className={Styles.dataRow}>
              <h5>Zone</h5>
              <div>Urbaine</div>
            </div>
          </div>
        </div>
        <div>
          <h4>Quantité d'ORM produits</h4>
          <div className={Styles.infoBanner}>
            <div className={Styles.graphMenu}>
              <div className={Styles.yearSelect}>
                <select onChange={handleYearChange} value={selectedYear}>
                  {ormData.map((data) => (
                    <option key={data.year} value={data.year}>
                      {data.year}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                Moyenne annuelle :{" "}
                <span style={{ fontWeight: "600" }}>
                  {averageQuantity.toFixed(2)} kg
                </span>
              </div>
            </div>
            <div className={Styles.graphContainer}>
              {yearData?.month.map((month, index) => (
                <div key={index} className={Styles.monthDataContainer}>
                  <div
                    className={Styles.monthDataQuantityBar}
                    style={{
                      backgroundColor: month.color,
                      color: month.textColor,
                      height: `calc(${(month.quantity / 200) * 100}% - 40px)`, // Supposant que 200 est la quantité maximale
                    }}
                  >
                    {month.quantity}kg
                  </div>
                  <div className={Styles.monthDataName}>{month.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RankingModale>
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
      {showCommunes ? (
        <SearchBar onSuggestionSelected={handleSuggestionSelected} />
      ) : (
        <SearchBarQuartier onSuggestionSelected={handleSuggestionSelected} />
      )}
      <div className={Styles.ContainerMap}>
        {showCommunes && geojsonCommunes && (
          <MapLeafletCommunes
            geojson={geojsonCommunes}
            onFeatureClick={handleFeatureClick}
            selectedZoneName={EnvoieNomSearchBarCommunes}
          />
        )}
        {!showCommunes && geojson && (
          <MapLeaflet
            geojson={geojson}
            onFeatureClick={handleFeatureClick}
            selectedZoneName={EnvoieNomSearchBarQuartier}
          />
        )}
      </div>
      {InfosName !== "Selectionnez une zone" ? (
        <div className={Styles.ContainerZoneInfos} onClick={OpenModaleOnClick}>
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
