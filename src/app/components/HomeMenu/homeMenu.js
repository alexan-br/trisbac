import Image from "next/image";

import Style from "./homeMenu.module.scss";

export default function HomeMenu() {
  return (
    <nav className={Style.NavContainer}>
      <ul className={Style.NavList}>
        <li className={Style.NavItem}>
          <Image src="/icons/home.svg" alt="Accueil" width={24} height={24} />
          <p className={Style.HomeText}>Accueil</p>
        </li>
        <li className={Style.NavItem}>
          <Image
            src="/icons/actu.svg"
            alt="Actualités"
            width={24}
            height={24}
          />
          <p>Actualités</p>
        </li>
        <li className={Style.NavItem}>
          <Image src="/icons/marker.svg" alt="Marker" width={24} height={24} />
          <p>Autour de moi</p>
        </li>
        <li className={Style.NavItem}>
          <Image src="/icons/agenda.svg" alt="Agenda" width={24} height={24} />
          <p>Agenda</p>
        </li>
        <li className={Style.NavItem}>
          <Image
            src="/icons/favoris.svg"
            alt="Favoris"
            width={24}
            height={24}
          />
          <p>Favoris</p>
        </li>
      </ul>
    </nav>
  );
}
