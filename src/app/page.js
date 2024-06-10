"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import CellularItem from "./components/CellulareItem/cellularItem";
import CellularActiveItem from "./components/CellulareActiveItem/cellularActiveItem";
import CellularFakeItem from "./components/CellularFakeItem/cellularFakeItem";
import CellularMenuItem from "./components/CellularMenuItem/cellularMenuItem";
import HomeMenu from "./components/HomeMenu/homeMenu";
import Styles from "./page.module.scss";
import HomeModale from "./components/HomeModale/homeModale";

export default function Home() {
  const tab_available_items_under_300px = [
    5, 7, 8, 11, 13, 14, 17, 19, 20, 23, 25, 26, 29, 31, 32,
  ];
  const tab_available_items_under_600px = [
    6, 7, 9, 10, 11, 14, 15, 17, 18, 19, 22, 23, 25, 26, 27, 32, 33,
  ];
  const tab_available_items_over_600px = [
    7, 8, 9, 11, 12, 13, 14, 17, 18, 19, 21, 22, 23, 24, 27, 28, 29,
  ];

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
            name: "Mémotri",
            description: "Ou déposer mes dechets",
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
    </main>
  );
}
