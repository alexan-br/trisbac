import Styles from "./cellularFakeItem.module.scss";

export default function CellularFakeItem({ cellular, hasBackground = true }) {
  return (
    <div
      className={`${Styles.cellularItem} ${
        !hasBackground ? Styles.noBackground : ""
      }`}
    >
      <div className={Styles.cellularMask}></div>
    </div>
  );
}
