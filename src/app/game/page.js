"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import TutoCard from "../components/TutoCard/tutoCard";
import GameModale from "../components/GameModale/gameModale";
import Styles from "./game.module.scss";
import GameResultModale from "../components/GameResultModale/gameResultModale";
import Confetti from "../components/Confetti/Confetti";
import Link from "next/link";

export default function Game() {
  const tabMouchoirUrl = [
    {
      urlImage: "/images/jeu/mouchoirs.png",
      nameObject: "Mouchoir",
      urlValidePoubelle: "/images/jeu/Poubelle_bleue.png",
      nameValidePoubelle: "Poubelle bleue",
      urlInvalidePoubelle: "/images/jeu/Poubelle_jaune.png",
      nameInvalidePoubelle: "Poubelle jaune",
    },
  ];

  const tabPommeAlimentUrl = [
    {
      urlImage: "/images/jeu/Pomme_aliment.png",
      nameObject: "Trognon de Pomme",
      urlValidePoubelle: "/images/jeu/Bac_de_compost.png",
      nameValidePoubelle: "Bac à compost",
      urlInvalidePoubelle: "/images/jeu/Bac_a_verre.png",
      nameInvalidePoubelle: "Colonne à verre",
    },
  ];

  const tablePapierUrl = [
    {
      urlImage: "/images/jeu/le-papier.png",
      nameObject: "Papier",
      urlValidePoubelle: "/images/jeu/Poubelle_jaune.png",
      nameValidePoubelle: "Poubelle jaune",
      urlInvalidePoubelle: "/images/jeu/Poubelle_bleue.png",
      nameInvalidePoubelle: "Poubelle bleue",
    },
  ];

  const tabBocalVerreUrl = [
    {
      urlImage: "/images/jeu/Bocal_verre.png",
      nameObject: "Pot en verre",
      urlValidePoubelle: "/images/jeu/Bac_a_verre.png",
      nameValidePoubelle: "Colonne à verre",
      urlInvalidePoubelle: "/images/jeu/Bac_de_compost.png",
      nameInvalidePoubelle: "Compost",
    },
  ];

  const [PlayerScore, setPlayerScore] = useState([
    { nombreObjectJoue: 0, nombreObjectValide: 0 },
  ]);

  const updatePlayerScoreWin = (idObject) => {
    setPlayerScore((prevScore) => {
      const updatedScore = [...prevScore];
      updatedScore[0].nombreObjectJoue += 1;
      updatedScore[0].nombreObjectValide += 1;
      document.getElementById(idObject).style.display = "none";
      var containerImage = document.getElementById(`IconDechet${idObject}`);
      containerImage.firstChild.style.filter = "brightness(1)";
      return updatedScore;
    });
  };

  const updatePlayerScoreLose = (idObject) => {
    setPlayerScore((prevScore) => {
      const updatedScore = [...prevScore];
      updatedScore[0].nombreObjectJoue += 1;
      updatedScore[0].nombreObjectValide += 0;
      document.getElementById(idObject).style.display = "none";
      var containerImage = document.getElementById(`IconDechet${idObject}`);
      containerImage.firstChild.style.filter = "brightness(1)";
      return updatedScore;
    });
  };

  const [isOverlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {}, [isOverlayVisible]);

  const handleOverlayOpen = () => {
    if (isOverlayVisible) {
      document.getElementById("OverlayExplication").style.display = "none";
      setOverlayVisible(false);
    } else {
      document.getElementById("OverlayExplication").style.display = "flex";
      setOverlayVisible(true);
    }
  };

  const handleOverlayClose = () => {
    document.getElementById("OverlayExplication").style.display = "none";
    setOverlayVisible(false);
  };

  const handleGameObjectClick = (e) => {
    switch (e.target.id) {
      case "mouchoirs":
        document.getElementById("GameModalemouchoirs").style.display = "flex";
        break;
      case "Pomme_aliment":
        document.getElementById("GameModalePomme_aliment").style.display =
          "flex";
        break;
      case "le_papier":
        document.getElementById("GameModalele_papier").style.display = "flex";
        break;
      case "Bocal_verre":
        document.getElementById("GameModaleBocal_verre").style.display = "flex";
        break;
      default:
        break;
    }
  };

  return (
    <main className={Styles.Main}>
      {PlayerScore[0].nombreObjectJoue === 4 ? (
        <GameResultModale
          modale={{ name: "Félicitations ! Tu as nettoyé toute la rue !" }}
        >
          <div className={Styles.infoBanner}>
            <h4>Informations</h4>
            <div className={Styles.infoCta}>
              <p>
                Retrouvez toutes les informations sur le tri des déchets, de
                façon ludique.
              </p>
              <img src="/icons/arrow.svg" />
            </div>
          </div>
          <div className={Styles.scoreContainer}>
            <div className={Styles.scoreResult}>
              {PlayerScore[0].nombreObjectValide / 2}/5
            </div>
            {PlayerScore[0].nombreObjectValide <= 6 ? <Confetti /> : null}
          </div>
          <div className={Styles.resultButtonContainer}>
            <Link className={`${Styles.ctaReplay} ${Styles.cta}`} href="/game">
              Rejouer
            </Link>
            <Link className={`${Styles.ctaFinish} ${Styles.cta}`} href="/">
              Terminer
            </Link>
          </div>
        </GameResultModale>
      ) : null}
      {/* <TutoCard /> */}
      <div className={Styles.GameContainer}>
        <Image
          src="/icons/exit-cross.svg"
          className={Styles.CrossExit}
          width={50}
          height={50}
          alt="ExitCross"
        />
        <div className={Styles.MascotteContainer}>
          <Image
            src="/images/Ile-de-Nantes-Mascotte.png"
            className={Styles.Mascotte}
            width={100}
            height={100}
            alt="Mascotte"
            onClick={handleOverlayOpen}
          />
          <div className={Styles.OverlayExplication} id="OverlayExplication">
            <div className={Styles.OverlayExplicationContent}>
              <p>
                Sélectionne les déchets et jette-les dans la poubelle
                appropriée.
              </p>
              <button onClick={handleOverlayClose}>Ok</button>
            </div>
          </div>
        </div>
        <div className={Styles.GameContent}>
          <div
            className={`${Styles.GameObjectContainer} ${Styles.Bouteille_plastique}`}
            onClick={handleGameObjectClick}
          >
            <Image
              src="/images/jeu/Bouteille_plastique.png"
              width={50}
              height={50}
              id="Bouteille_plastique"
              alt="Game"
            />
          </div>
          <div
            className={`${Styles.GameObjectContainer} ${Styles.Pomme_aliment}`}
            onClick={handleGameObjectClick}
          >
            <Image
              src="/images/jeu/Pomme_aliment.png"
              width={50}
              height={50}
              id="Pomme_aliment"
              alt="Game"
            />
          </div>
          <div
            className={`${Styles.GameObjectContainer} ${Styles.Bocal_verre}`}
            onClick={handleGameObjectClick}
          >
            <Image
              src="/images/jeu/Bocal_verre.png"
              width={50}
              height={50}
              id="Bocal_verre"
              alt="Game"
            />
          </div>
          <div
            className={`${Styles.GameObjectContainer} ${Styles.le_papier}`}
            onClick={handleGameObjectClick}
          >
            <Image
              src="/images/jeu/le-papier.png"
              width={50}
              height={50}
              id="le_papier"
              alt="Game"
            />
          </div>
          <div
            className={`${Styles.GameObjectContainer} ${Styles.mouchoirs}`}
            onClick={handleGameObjectClick}
          >
            <Image
              src="/images/jeu/mouchoirs.png"
              width={50}
              height={50}
              id="mouchoirs"
              alt="Game"
            />
          </div>
        </div>
        <Image
          className={Styles.BgImage}
          src="/images/game_nantes_img.png"
          width={500}
          height={800}
          alt="Game"
        />
      </div>

      <div className={Styles.GameBar}>
        <div
          className={Styles.GameBarSingleContentContainer}
          id="Bouteille_plastique"
        >
          <Image
            src="/images/jeu/Bouteille_plastique.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
        <div
          className={Styles.GameBarSingleContentContainer}
          id="IconDechetBocal_verre"
        >
          <Image
            src="/images/jeu/Bocal_verre.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
        <div
          className={Styles.GameBarSingleContentContainer}
          id="IconDechetPomme_aliment"
        >
          <Image
            src="/images/jeu/Pomme_aliment.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
        <div
          className={Styles.GameBarSingleContentContainer}
          id="IconDechetle_papier"
        >
          <Image
            src="/images/jeu/le-papier.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
        <div
          className={Styles.GameBarSingleContentContainer}
          id="IconDechetmouchoirs"
        >
          <Image
            src="/images/jeu/mouchoirs.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
      </div>

      <GameModale
        tabInfos={tabMouchoirUrl}
        id="GameModalemouchoirs"
        updatePlayerScoreWin={() => updatePlayerScoreWin("mouchoirs")}
        updatePlayerScoreLose={() => updatePlayerScoreLose("mouchoirs")}
      />
      <GameModale
        tabInfos={tabPommeAlimentUrl}
        id="GameModalePomme_aliment"
        updatePlayerScoreWin={() => updatePlayerScoreWin("Pomme_aliment")}
        updatePlayerScoreLose={() => updatePlayerScoreLose("Pomme_aliment")}
      />
      <GameModale
        tabInfos={tablePapierUrl}
        id="GameModalele_papier"
        updatePlayerScoreWin={() => updatePlayerScoreWin("le_papier")}
        updatePlayerScoreLose={() => updatePlayerScoreLose("le_papier")}
      />
      <GameModale
        tabInfos={tabBocalVerreUrl}
        id="GameModaleBocal_verre"
        updatePlayerScoreWin={() => updatePlayerScoreWin("Bocal_verre")}
        updatePlayerScoreLose={() => updatePlayerScoreLose("Bocal_verre")}
      />
    </main>
  );
}
