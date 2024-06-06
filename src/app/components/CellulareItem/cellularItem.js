import React from "react";
import Styles from "./cellularItem.module.scss";

export default function CellularItem({ cellular }) {
    return (
        <div className={Styles.cellularItem}>
            <h2>{cellular.name}</h2>
            <p>{cellular.description}</p>
        </div>
    );
}