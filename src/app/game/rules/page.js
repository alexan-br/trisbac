import Image from "next/image";
import Link from "next/link";

import Styles from "./rules.module.scss";

const GamePageRules = () => {
  return (
    <div className={Styles.rulesContainer}>
      <Link href="/">
        <Image
          className={Styles.ExitCross}
          src="/icons/arrow.svg"
          alt="Exit cross"
          width={40}
          height={40}
        />
      </Link>
      <h1>Guide du tri des dêchets</h1>
      <p className={Styles.Intro}>
        Apprendre à trier ses déchets passe par l’identification de l’utilité de
        chaque poubelle.
      </p>
      <ul>
        <li>
          <p>Les déchets à jeter dans la poubelle jaune</p>
          <div
            className={Styles.ContainerTrash}
            style={{ borderColor: "#ffcf30" }}
          >
            <Image
              src="/images/jeu/Poubelle_jaune.png"
              alt="Poubelle jaune"
              width={100}
              height={100}
            />
            <div style={{ backgroundColor: "#ffcf30" }}>
              <p>Papier</p>
              <Image
                src="/images/jeu/papier.png"
                alt="Papier"
                width={100}
                height={100}
              />
            </div>
            <div style={{ backgroundColor: "#ffcf30" }}>
              <p>Métal</p>
              <Image
                src="/images/jeu/metal.png"
                alt="Metal"
                width={100}
                height={100}
              />
            </div>
            <div style={{ backgroundColor: "#ffcf30" }}>
              <p>Plastique</p>
              <Image
                src="/images/jeu/plastique.png"
                alt="Plastique"
                width={100}
                height={100}
              />
            </div>
          </div>
        </li>
        <li>
          <p>Tout le verre se met dans les colonnes à verre</p>
          <div
            className={Styles.ContainerTrash}
            style={{ borderColor: "#0ca364" }}
          >
            <Image
              src="/images/jeu/Bac_a_verre.png"
              alt="Bac a verre"
              width={100}
              height={100}
            />
            <div style={{ backgroundColor: "#0ca364" }}>
              <p style={{ color: "#ffffff" }}>Verre</p>
              <Image
                src="/images/jeu/Verre.png"
                alt="Verre"
                width={100}
                height={100}
              />
            </div>
          </div>
        </li>
        <li>
          <p>Les déchets alimentaires vont au compost</p>
          <div
            className={Styles.ContainerTrash}
            style={{ borderColor: "#c6943e" }}
          >
            <Image
              src="/images/jeu/Bac_de_compost.png"
              alt="Bac de compost"
              width={100}
              height={100}
            />
            <div style={{ backgroundColor: "#c6943e" }}>
              <p style={{ color: "#ffffff" }}>Nourriture</p>
              <Image
                src="/images/jeu/Nouriture.png"
                alt="Nouriture"
                width={100}
                height={100}
              />
            </div>
          </div>
        </li>
        <li>
          <p>
            Les vêtements en bon état ou abimés vont dans les points d’apport
          </p>
          <div
            className={Styles.ContainerTrash}
            style={{ borderColor: "#dfddcf" }}
          >
            <Image
              src="/images/jeu/Bac_vetements.png"
              alt="Bac à vetements"
              width={100}
              height={100}
            />
            <div style={{ backgroundColor: "#dfddcf" }}>
              <p>vêtements</p>
              <Image
                src="/images/jeu/Vêtements.png"
                alt="Vêtements"
                width={100}
                height={100}
              />
            </div>
          </div>
        </li>
        <li>
          <p>Les déchets dangereux sont emmenés à la déchetterie</p>
          <div
            className={Styles.ContainerTrash}
            style={{ borderColor: "#f38b46" }}
          >
            <Image
              src="/images/jeu/Dechets_dangereux_logo.png"
              alt="Dêchets dangereux logo"
              width={100}
              height={100}
            />
            <div style={{ backgroundColor: "#f38b46" }}>
              <p>Dêchets dangereux</p>
              <Image
                src="/images/jeu/Dechets_dangereux.png"
                alt="Dêchets dangereux"
                width={100}
                height={100}
              />
            </div>
          </div>
        </li>
        <li>
          <p>Les déchets dangereux sont emmenés à la déchetterie</p>
          <div
            className={Styles.ContainerTrash}
            style={{ borderColor: "#46c1e1" }}
          >
            <Image
              src="/images/jeu/Poubelle_bleue.png"
              alt="Poubelle bleue"
              width={100}
              height={100}
            />
            <div style={{ backgroundColor: "#46c1e1" }}>
              <p>Dêchets ménagers</p>
              <Image
                src="/images/jeu/Déchets_ménagers.png"
                alt="Dêchets ménagers"
                width={100}
                height={100}
              />
            </div>
          </div>
        </li>
      </ul>
      <p className={Styles.TextEnd}>C'est à toi de jouer maintenant !</p>
      <Link className={Styles.ButtonEnd} href="/game">
        Jouer
      </Link>
    </div>
  );
};

export default GamePageRules;
