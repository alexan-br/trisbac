import React from "react";
import Styles from "./cellularItem.module.scss";

export default function CellularItem({ id, cellular }) {
    return (
        <div id={id} className={Styles.cellularItem}>
            <div className={Styles.cellularMask}>
                <img src={cellular.iconLink} alt={cellular.name} />
                <h2 className={cellular.nameHaveRound}>{cellular.name}</h2>
                <p>{cellular.description}</p>
            </div>
        </div>
    );
}