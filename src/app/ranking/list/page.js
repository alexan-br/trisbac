"use client";
import React, { useState } from "react";
import HeaderRanking from "@/app/components/HeaderRanking/headerRanking";
import CardRanking from "@/app/components/CardRanking/cardRanking";

import Styles from "./rankingList.module.scss";

export default function RankingList() {
  const [showCommunes, setShowCommunes] = useState(true); // État pour déterminer quelle carte afficher

  return (
    <main>
      <HeaderRanking urlPage="/ranking" />
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
      <div className={Styles.ContainerCardsRanking}>
        <div className={Styles.ContainerRankingEntete}>
          <div className={Styles.RankingEntete}>
            <p>En-tête du classement</p>
            <p>70-90 tonnes</p>
          </div>
          <CardRanking
            title="Vie  PratiquePratiquePratiquePratiquePratiquePratique"
            position="1"
            valueWeight="100kg"
            iconMascotte="/images/Elephant.jpg"
            colorCard="CardGreen"
          />
          <CardRanking
            title="Vie Pratique"
            position="2"
            valueWeight="90kg"
            iconMascotte="/images/Elephant.jpg"
            colorCard="CardGreen"
          />
          <CardRanking
            title="Vie Pratique"
            position="2"
            valueWeight="90kg"
            iconMascotte="/images/Elephant.jpg"
            colorCard="Green"
          />
        </div>
      </div>
    </main>
  );
}
