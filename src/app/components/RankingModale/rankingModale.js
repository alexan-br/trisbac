"use client";
import Image from "next/image";
import React from "react";
import { Children } from "react";

import Style from "./rankingmodale.module.scss";
import CellularActiveItem from "../CellulareActiveItem/cellularActiveItem";

export default function RankingModale({ id, modale, children, exitModale }) {
  return (
    <div id={id} className={Style.rankingModaleContainer}>
      <div className={Style.modaleContentContainer}>
        <div className={Style.modaleInfo}>
          <div>
            <h3>{modale.name}</h3>
          </div>
          {Children.map(children, (child) => (
            <>{child}</>
          ))}
        </div>
        <div className={Style.modaleContent}></div>
      </div>
    </div>
  );
}
