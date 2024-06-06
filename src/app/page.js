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
        <CellularItem id="premierItem" cellular={{ name: "iPhone 12", description: "succeeding the iPhone 11." }} />
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
    </main>
  );
}
