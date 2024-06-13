import Styles from "./cellularMenuItem.module.scss";

export default function cellularMenuItem({ cellular }) {
  return (
    <div className={`${Styles.cellularItem} CellularMenuItem`}>
      <div className={Styles.cellularMask}>
        <img src={cellular.iconLink} alt={cellular.name} />
        <h2>{cellular.name}</h2>
        <p>{cellular.description}</p>
      </div>
    </div>
  );
}
