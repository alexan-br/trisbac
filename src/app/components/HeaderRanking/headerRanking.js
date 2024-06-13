import Image from "next/image";
import Link from "next/link";

import Styles from "./headerRanking.module.scss";

const HeaderRanking = ({ urlPage, isModaleOpen, CloseModaleOnClick }) => {
  const handleClick = (e) => {
    if (isModaleOpen) {
      urlPage = "";
      e.preventDefault(); // Empêche la redirection par défaut
      CloseModaleOnClick(); // Ferme la modale
    }
  };
  return (
    <header className={Styles.Header} onClick={handleClick}>
      <Link href={urlPage}>
        <Image
          className={Styles.Arrow}
          src="/icons/arrow-left.svg"
          width={30}
          height={30}
          alt="Arrow"
        ></Image>
      </Link>
      <h1>Carte</h1>
    </header>
  );
};

export default HeaderRanking;
