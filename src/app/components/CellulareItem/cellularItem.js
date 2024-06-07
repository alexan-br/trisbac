import React from "react";
import Image from "next/image";

import Styles from "./cellularItem.module.scss";

export default function CellularItem({ id, cellular }) {
    return (
        <div id={id} className={Styles.cellularItem}>
            <div className={Styles.cellularMask}>
                <Image src={cellular.ImageLink} alt={cellular.description} width={40} height={40} />
                <p>{cellular.description}</p>
            </div>
        </div>
    );
}