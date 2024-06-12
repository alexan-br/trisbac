"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CellularItem from "./components/CellulareItem/cellularItem";
import CellularActiveItem from "./components/CellulareActiveItem/cellularActiveItem";
import CellularFakeItem from "./components/CellularFakeItem/cellularFakeItem";
import CellularMenuItem from "./components/CellularMenuItem/cellularMenuItem";
import HomeMenu from "./components/HomeMenu/homeMenu";
import Styles from "./page.module.scss";
import HomeModale from "./components/HomeModale/homeModale";
import Link from "next/link";

export default function Home() {
  const [showCommunes, setShowCommunes] = useState(true); // État pour déterminer quelle carte afficher
  const [selectedYear, setSelectedYear] = useState(2024); // État pour l'année sélectionnée

  const tab_available_items_under_300px = [
    5, 7, 8, 11, 13, 14, 17, 19, 20, 23, 25, 26, 29, 31, 32,
  ];
  const tab_available_items_under_600px = [
    6, 7, 9, 10, 11, 14, 15, 17, 18, 19, 22, 23, 25, 26, 27, 32, 33,
  ];
  const tab_available_items_over_600px = [
    7, 8, 9, 11, 12, 13, 14, 17, 18, 19, 21, 22, 23, 24, 27, 28, 29,
  ];

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
    function SetPositionMainsItems() {
      // Gere la position des items de la home en fonction de la taille de l'écran

      const mainContainer = document.getElementById("mainContainerCellular");
      let tab_available_items = [];

      if (mainContainer) {
        if (window.innerWidth < 300) {
          tab_available_items = [...tab_available_items_under_300px];
        } else if (window.innerWidth < 600) {
          tab_available_items = [...tab_available_items_under_600px];
        } else {
          tab_available_items = [...tab_available_items_over_600px];
        }

        const activeItems = Array.from(
          mainContainer.getElementsByClassName("CellularActiveItem")
        );
        let lastPosition = -1;

        activeItems.forEach((item) => {
          if (!item.dataset.moved && tab_available_items.length > 0) {
            const position = tab_available_items.shift() - 1; // Get and remove the first value from the array
            const targetPosition = Math.min(
              position,
              mainContainer.children.length
            ); // Ensure the position is within bounds

            // Move the item to the target position
            mainContainer.insertBefore(
              item,
              mainContainer.children[targetPosition]
            );

            // Update lastPosition
            lastPosition = Math.max(lastPosition, position);

            // Mark this item as moved
            item.dataset.moved = true;
          }
        });

        // Move the CellularAddItem to the next available position
        const addItem = document.getElementById("CellularAddItem");
        if (addItem && !addItem.dataset.moved) {
          const nextAvailablePosition = tab_available_items.find(
            (pos) => pos - 1 > lastPosition
          );
          if (nextAvailablePosition !== undefined) {
            const targetPosition = Math.min(
              nextAvailablePosition - 1,
              mainContainer.children.length
            );
            mainContainer.insertBefore(
              addItem,
              mainContainer.children[targetPosition]
            );

            // Mark the CellularAddItem as moved
            addItem.dataset.moved = true;
          }
        }
      }
    }

    function ToggleMenu() {
      // Gestion ouverture et fermeture du menu
      const mainContainerMenuCellular = document.getElementById(
        "mainContainerMenuCellular"
      );
      const CellularAddItem = document.getElementById("CellularAddItem");

      if (mainContainerMenuCellular && CellularAddItem) {
        CellularAddItem.addEventListener("click", () => {
          mainContainerMenuCellular.style.top = "0";
          mainContainerMenuCellular.style.maxHeight = "106vh";
        });

        // on récupere le premier enfant de mainContainerMenuCellular
        const firstChild = mainContainerMenuCellular.firstElementChild;
        console.log(firstChild);
        if (firstChild) {
          firstChild.addEventListener("click", () => {
            mainContainerMenuCellular.style.top = "106vh";
            mainContainerMenuCellular.style.maxHeight = "0";
          });
        }
      }
    }

    function OpenModaleOnClick() {
      const activeItems = document.querySelectorAll(".CellularActiveItem");
      activeItems.forEach((item) => {
        item.addEventListener("click", () => {
          const id = item.getAttribute("id");
          const modale = document.getElementById("modale" + id);
          console.log(modale);
          modale.style.top = "5vh";
          modale.style.maxHeight = "103vh";
        });
      });
    }

    ToggleMenu();
    SetPositionMainsItems();
    OpenModaleOnClick();
  }, []);

  const handleCrossCloseModale = (id) => {
    const modale = document.getElementById(id);
    modale.style.top = "106vh";
    modale.style.maxHeight = "0px";
  };
  return (
    <main className={Styles.main}>
      <div className={Styles.ContainerIconHome}>
        <Image src="/icons/bell.svg" alt="bell" width={40} height={40} />
        <Image
          src="/icons/settings.svg"
          alt="settings"
          width={40}
          height={40}
        />
      </div>
      <HomeMenu />
      <div id="mainContainerCellular" className={Styles.cellularItems}>
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />

        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />

        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />

        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />

        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />

        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />

        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />

        <CellularItem
          id="CellularAddItem"
          cellular={{
            ImageLink: "/icons/croix.svg",
            description: "Ajouter un service",
          }}
        />
        <CellularActiveItem
          id="game"
          className="CellularActiveItem"
          cellular={{
            iconLink: "/icons/controller.svg",
            name: "Jeu du tri",
            description: "J'apprends à trier mes déchets",
          }}
        />
        <CellularActiveItem
          id="defi"
          className="CellularActiveItem"
          cellular={{
            iconLink: "/icons/defi.svg",
            name: "Défi tri",
            description: "consulter l'avancée des quartiers",
          }}
        />
        <CellularActiveItem
          id="deuxiemeItem"
          className="CellularActiveItem"
          cellular={{
            iconLink: "/icons/memotri.svg",
            name: "Mémotri",
            description: "Ou déposer mes dechets",
          }}
        />
      </div>

      <div
        id="mainContainerMenuCellular"
        className={Styles.mainContainerMenuCellular}
      >
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularMenuItem
          cellular={{
            iconLink: "/icons/train.svg",
            name: "Bus - Tram",
            description: "Prochains passages",
          }}
        />
        <CellularMenuItem
          cellular={{
            iconLink: "/icons/train.svg",
            name: "Bus - Tram",
            description: "Prochains passages",
          }}
        />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />

        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
        <CellularFakeItem hasBackground={false} />
      </div>
      {/*<div className={Styles.ContainerModale}></div> */}
      <HomeModale
        id="modalegame"
        icon="/icons/controller.svg"
        modale={{
          name: "Jeu du tri",
          desc: "Informations et jeu",
        }}
        exitModale={handleCrossCloseModale}
      >
        <p>
          Apprenez à trier de façon ludique avec le jeu du tri. Parcourez les
          quartiers de Nantes et nettoyez les rues en choisissant les bonnes
          poubelles.
        </p>
        <div className={Styles.infoBanner}>
          <h4>Informations</h4>
          <div className={Styles.infoCta}>
            <p>
              Retrouvez toutes les informations sur le tri des déchets, de façon
              ludique.
            </p>
            <img src="/icons/arrow.svg" />
          </div>
        </div>
        <div className={Styles.playButtonContainer}>
          <button className={Styles.playButton}>Jouer</button>
        </div>
      </HomeModale>
      <HomeModale
        id="modaledefi"
        icon="/icons/defi.svg"
        modale={{
          name: "Défi tri",
          desc: "Nantes (Centre-ville)",
        }}
        exitModale={handleCrossCloseModale}
      >
        <div className={Styles.ContainerSwitchMap}>
          <button
            className={`${Styles.ButtonSwitchMap} ${Styles.Left} ${
              showCommunes ? Styles.ButtonSwitchMapActive : ""
            }`}
            onClick={() => setShowCommunes(true)}
          >
            Commune
          </button>
          <button
            className={`${Styles.ButtonSwitchMap} ${Styles.Right} ${
              !showCommunes ? Styles.ButtonSwitchMapActive : ""
            }`}
            onClick={() => setShowCommunes(false)}
          >
            Quartier
          </button>
        </div>
        <div className={Styles.rankVisualizerContainer}>
          <h4>Rang {!showCommunes ? "du quartier " : "de la commune"}</h4>
          <div className={Styles.rankVisualizer}></div>
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
              <div>Bon</div>
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
        <Link className={Styles.seeMorePlacesLink} href="/">
          Consulter l'ensemble des {!showCommunes ? "quartiers " : "communes"}
        </Link>
      </HomeModale>
    </main>
  );
}
