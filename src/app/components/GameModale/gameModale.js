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

  function handleQcmDisplay() {
    document.getElementById(`qcm${id}`).style.display = "flex";
    document.getElementById(`true${id}`).style.display = "none";
    document.getElementById(`false${id}`).style.display = "none";
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
        <p className={Styles.question}>
          Dans quelle poubelle ce déchet doit-il être jeté ?
        </p>
        <div className={Styles.currentItemContainer}>
          <Image
            src={tabInfos[0].urlImage}
            width={50}
            height={50}
            alt={tabInfos[0].nameObject}
          />
          <p>{tabInfos[0].nameObject}</p>
        </div>
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
        <Image
          src="/icons/exit-cross-black.svg"
          className={Styles.CrossExitBlack}
          width={50}
          height={50}
          alt="ExitCross"
          onClick={CloseModale}
        />
        <p>
          Faux ! Le {tabInfos[0].nameObject} se jette dans la{" "}
          {tabInfos[0].nameValidePoubelle} !
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.04 17.032L11 13.072L14.96 17.032L16.5 15.492L12.54 11.532L16.5 7.57198L14.96 6.03198L11 9.99198L7.04 6.03198L5.5 7.57198L9.46 11.532L5.5 15.492L7.04 17.032ZM11 22.532C9.47833 22.532 8.04833 22.243 6.71 21.6652C5.37167 21.0873 4.2075 20.3037 3.2175 19.3145C2.2275 18.3252 1.44393 17.161 0.866801 15.822C0.289668 14.4829 0.000734725 13.0529 1.3924e-06 11.532C-0.00073194 10.011 0.288201 8.58105 0.866801 7.24198C1.4454 5.90291 2.22897 4.73875 3.2175 3.74948C4.20603 2.76022 5.3702 1.97665 6.71 1.39878C8.0498 0.820916 9.4798 0.531982 11 0.531982C12.5202 0.531982 13.9502 0.820916 15.29 1.39878C16.6298 1.97665 17.794 2.76022 18.7825 3.74948C19.771 4.73875 20.555 5.90291 21.1343 7.24198C21.7136 8.58105 22.0022 10.011 22 11.532C21.9978 13.0529 21.7089 14.4829 21.1332 15.822C20.5575 17.161 19.774 18.3252 18.7825 19.3145C17.791 20.3037 16.6269 21.0877 15.29 21.6663C13.9531 22.2449 12.5231 22.5334 11 22.532Z"
              fill="#B60000"
            />
          </svg>
        </p>
        <div>
          <Image
            src={tabInfos[0].urlImage}
            width={100}
            height={100}
            alt={tabInfos[0].nameObject}
          />
          <Image
            src={tabInfos[0].urlInvalidePoubelle}
            width={100}
            height={100}
            alt={tabInfos[0].nameInvalidePoubelle}
          />
        </div>
        <button
          className={Styles.nextButton}
          onClick={() =>
            id !== "GameModaleBouteille_plastique"
              ? EndGameModaleWin()
              : handleQcmDisplay()
          }
        >
          Suivant
        </button>
      </div>
      <div
        className={`${Styles.ModaleContent} ${Styles.true}`}
        id={`true${id}`}
      >
        <Image
          src="/icons/exit-cross-black.svg"
          className={Styles.CrossExitBlack}
          width={50}
          height={50}
          alt="ExitCross"
          onClick={CloseModale}
        />
        <div className={Styles.answerContainer}>
          <p>
            Bonne réponse ! Le {tabInfos[0].nameObject} se jette dans la{" "}
            {tabInfos[0].nameValidePoubelle}
            <svg
              className={Styles.markAnswer}
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 22.4292C12.4445 22.4292 13.8749 22.1447 15.2095 21.5919C16.5441 21.0391 17.7567 20.2288 18.7782 19.2074C19.7996 18.1859 20.6099 16.9733 21.1627 15.6387C21.7155 14.3041 22 12.8737 22 11.4292C22 9.98466 21.7155 8.55426 21.1627 7.21968C20.6099 5.8851 19.7996 4.67247 18.7782 3.65102C17.7567 2.62958 16.5441 1.81933 15.2095 1.26652C13.8749 0.713722 12.4445 0.429199 11 0.429199C8.08262 0.429199 5.28473 1.58812 3.22183 3.65102C1.15893 5.71392 0 8.51182 0 11.4292C0 14.3466 1.15893 17.1445 3.22183 19.2074C5.28473 21.2703 8.08262 22.4292 11 22.4292ZM10.7164 15.8781L16.8276 8.54475L14.9502 6.98031L9.69467 13.2858L6.97522 10.5651L5.247 12.2933L8.91367 15.96L9.85967 16.906L10.7164 15.8781Z"
                fill="#BBDC1E"
              />
            </svg>
          </p>
        </div>
        <Image
          src={tabInfos[0].urlImage}
          width={100}
          height={100}
          alt={tabInfos[0].nameObject}
        />
        <button
          className={Styles.nextButton}
          onClick={() =>
            id !== "GameModaleBouteille_plastique"
              ? EndGameModaleWin()
              : handleQcmDisplay()
          }
        >
          Suivant
        </button>
      </div>
      <div className={`${Styles.ModaleContent} ${Styles.qcm}`} id={`qcm${id}`}>
        <div className={Styles.answerContainer}>
          <p>Aide moi à transformer ce/cette {tabInfos[0].nameObject} !</p>
        </div>
        <Image
          src={tabInfos[0].urlImage}
          width={100}
          height={100}
          alt={tabInfos[0].nameObject}
        />
        <Image
          src="icons/arrow-down.svg"
          width={50}
          height={50}
          alt={tabInfos[0].nameObject}
        />
        <div className={Styles.qcmContainer}>
          {/* {validRecycle.map((option, index) => (
            <div
              key={index}
              className={`${Styles.optionContainer} ${
                selectedOptions.includes(option) ? Styles.selected : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <Image
                src={option}
                width={100}
                height={100}
                alt={`Option ${index + 1}`}
              />
            </div>
          ))} */}
        </div>

        <button className={Styles.nextButton} onClick={EndGameModaleWin}>
          Suivant
        </button>
      </div>
    </div>
  );
}
