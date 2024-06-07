import CellularItem from "./components/CellulareItem/cellularItem";
import CellularFakeItem from "./components/CellularFakeItem/cellularFakeItem";
import HomeMenu from "./components/HomeMenu/homeMenu";

import Styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={Styles.main}>
      <HomeMenu />
      <div className={Styles.cellularItems}>
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularFakeItem />
        <CellularItem id="premierItem" cellular={{ ImageLink: "/images/croix.svg", description: "Ajouter un service" }} />
        <CellularItem id="premierItem" cellular={{ ImageLink: "/images/croix.svg", description: "Ajouter un service" }} />
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
      </div>
      
      { /*<div className={Styles.ContainerModale}>

  </div> */}
    </main>
  );
}
