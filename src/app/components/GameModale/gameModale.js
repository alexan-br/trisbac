"use client";
import { useState } from "react";
import Image from "next/image";
import Styles from "./gameModale.module.scss";

export default function GameModale({
  tabInfos,
  id,
  updatePlayerScoreWin,
  updatePlayerScoreLose,
}) {
  function CloseModale() {
    document.getElementById(id).style.display = "none";
    document.getElementById(`true${id}`).style.display = "none";
    document.getElementById(`false${id}`).style.display = "none";
    document.getElementById(`choice${id}`).style.display = "flex";
  }

  function CloseModaleIfClickedOutside(event) {
    if (event.target.id === id) {
      document.getElementById(id).style.display = "none";
      document.getElementById(`true${id}`).style.display = "none";
      document.getElementById(`false${id}`).style.display = "none";
      document.getElementById(`choice${id}`).style.display = "flex";
    }
  }

  function EndGameModaleWin() {
    updatePlayerScoreWin();
    document.getElementById(id).style.display = "none";
  }

  function EndGameModaleLose() {
    updatePlayerScoreLose();
    document.getElementById(id).style.display = "none";
  }

  return (
    <div
      className={Styles.ModaleDechet}
      id={id}
      onClick={CloseModaleIfClickedOutside}
    >
      <div
        className={`${Styles.ModaleContent} ${Styles.default}`}
        id={`choice${id}`}
      >
        <Image
          src="/icons/exit-cross-black.svg"
          className={Styles.CrossExitBlack}
          width={50}
          height={50}
          alt="ExitCross"
          onClick={CloseModale}
        />
        <p>Dans quelle poubelle ce déchet doit-il être jeté ?</p>
        <Image
          src={tabInfos[0].urlImage}
          width={50}
          height={50}
          alt={tabInfos[0].nameObject}
        />
        <p>{tabInfos[0].nameObject}</p>
        <div className={Styles.ModaleContentPoubellesContainer}>
          <div
            className={Styles.ModaleContentSinglePoubelle}
            id="poubelleValide"
            onClick={() => {
              document.getElementById(`true${id}`).style.display = "flex";
              document.getElementById(`choice${id}`).style.display = "none";
            }}
          >
            <Image
              src={tabInfos[0].urlValidePoubelle}
              width={100}
              height={100}
              alt="Poubelle"
            />
            <p>{tabInfos[0].nameValidePoubelle}</p>
          </div>
          <div
            className={Styles.ModaleContentSinglePoubelle}
            id="poubelleUnvalide"
            onClick={() => {
              document.getElementById(`false${id}`).style.display = "flex";
              document.getElementById(`choice${id}`).style.display = "none";
            }}
          >
            <Image
              src={tabInfos[0].urlInvalidePoubelle}
              width={100}
              height={100}
              alt="Poubelle"
            />
            <p>{tabInfos[0].nameInvalidePoubelle}</p>
          </div>
        </div>
      </div>

      <div
        className={`${Styles.ModaleContent} ${Styles.false}`}
        id={`false${id}`}
      >
        Faux
        <button onClick={EndGameModaleLose}>Suivant</button>
      </div>
      <div
        className={`${Styles.ModaleContent} ${Styles.true}`}
        id={`true${id}`}
      >
        Vrai
        <button onClick={EndGameModaleWin}>Suivant</button>
      </div>
    </div>
  );
}
