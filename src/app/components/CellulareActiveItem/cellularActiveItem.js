import React from "react";
import Styles from "./cellularActiveItem.module.scss";

export default function CellularActiveItem({ id, className, cellular }) {
  return (
    <div id={id} className={`${Styles.cellularActiveItem} ${className}`}>
      <div className={Styles.cellularMask}>
        <img src={cellular.iconLink} alt={cellular.name} />
        <h2 className={`${Styles.nameHaveRound} ${cellular.nameHaveRound}`}>
          {cellular.name}
        </h2>
        <p>{cellular.description}</p>
      </div>
    </div>
  );
}
