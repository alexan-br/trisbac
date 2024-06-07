import React from "react";
import Styles from "./cellularActiveItem.module.scss";

export default function CellularActiveItem({ id, cellular }) {
  return (
    <div id={id} className={Styles.cellularActiveItem}>
      <div className={Styles.cellularMask}>
        <img src={cellular.iconLink} alt={cellular.name} />
        <h2 className={cellular.nameHaveRound}>{cellular.name}</h2>
        <p>{cellular.description}</p>
      </div>
    </div>
  );
}
