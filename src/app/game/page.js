"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./game.module.scss";

export default function Game() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    const gameObjectContainers = document.querySelectorAll(
      `.${Styles.GameObjectContainer}`
    );

    gameObjectContainers.forEach((element) => {
      element.addEventListener("click", (e) => {
        const id = e.target.id;
        const modale = document.getElementById(`Modale${id}`);
        if (modale) {
          modale.style.display = "flex";
        }
      });
    });

    const crossExitBlacks = document.querySelectorAll(
      `.${Styles.CrossExitBlack}`
    );

    crossExitBlacks.forEach((element) => {
      element.addEventListener("click", (e) => {
        const modale = e.target.parentElement.parentElement;
        modale.style.display = "none";
      });
    });
  }, [isOverlayVisible]);

  const handleOverlayOpen = () => {
    document.getElementById("OverlayExplication").style.display = "flex";
    setOverlayVisible(true);
  };

  const handleOverlayClose = () => {
    document.getElementById("OverlayExplication").style.display = "none";
    setOverlayVisible(false);
  };

  return (
    <main className={Styles.Main}>
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
          >
            <Image
              src="/images/jeu/Bocal_verre.png"
              width={50}
              height={50}
              id="Bocal_verre"
              alt="Game"
            />
          </div>
          <div className={`${Styles.GameObjectContainer} ${Styles.le_papier}`}>
            <Image
              src="/images/jeu/le-papier.png"
              width={50}
              height={50}
              id="le_papier"
              alt="Game"
            />
          </div>
          <div className={`${Styles.GameObjectContainer} ${Styles.mouchoirs}`}>
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
        <div className={Styles.GameBarSingleContentContainer}>
          <Image
            src="/images/jeu/Bouteille_plastique.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
        <div className={Styles.GameBarSingleContentContainer}>
          <Image
            src="/images/jeu/Bocal_verre.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
        <div className={Styles.GameBarSingleContentContainer}>
          <Image
            src="/images/jeu/Pomme_aliment.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
        <div className={Styles.GameBarSingleContentContainer}>
          <Image
            src="/images/jeu/le-papier.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
        <div className={Styles.GameBarSingleContentContainer}>
          <Image
            src="/images/jeu/mouchoirs.png"
            width={50}
            height={50}
            alt="Game"
          />
        </div>
      </div>

      <div className={Styles.ModaleDechet} id="Modalemouchoirs">
        <div className={Styles.ModaleContent} id="Modalemouchoirs_content_1">
          <Image
            src="/icons/exit-cross-black.svg"
            className={Styles.CrossExitBlack}
            width={50}
            height={50}
            alt="ExitCross"
          />
          <p>Dans quelle poubelle ce déchet doit-il être jeté ?</p>
          <Image
            src="/images/jeu/mouchoirs.png"
            width={50}
            height={50}
            alt="mouchoirs"
          />
          <p>Mouchoir</p>
          <div className={Styles.ModaleContentPoubellesContainer}>
            <div className={Styles.ModaleContentSinglePoubelle}>
              <Image
                src="/images/jeu/Poubelle_bleue.png"
                width={100}
                height={100}
                alt="Poubelle"
              />
              <p>Poubelle bleue</p>
            </div>
            <div className={Styles.ModaleContentSinglePoubelle}>
              <Image
                src="/images/jeu/Poubelle_jaune.png"
                width={100}
                height={100}
                alt="Poubelle"
              />
              <p>Poubelle jaune</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
