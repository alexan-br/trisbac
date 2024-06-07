import CellularItem from "./components/CellulareItem/cellularItem";
import CellularActiveItem from "./components/CellulareActiveItem/cellularActiveItem";
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
        <CellularItem id="premierItem" cellular={{ ImageLink:"/icons/croix.svg", description: "Ajouter un service" }} />
        <CellularActiveItem id="deuxiemeItem" cellular={{ iconLink:"/icons/memotri.svg", name: "Mémotri", description: "Ou déposer mes dechets" }} />
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
