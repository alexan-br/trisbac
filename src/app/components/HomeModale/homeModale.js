"use client";
import Image from "next/image";
import React from "react";
import { Children } from "react";

import Style from "./homemodale.module.scss";
import CellularActiveItem from "../CellulareActiveItem/cellularActiveItem";

export default function HomeModale({ id, icon, modale, children, exitModale }) {
  return (
    <div id={id} className={Style.homeModaleContainer}>
      <div className={Style.exitCrossModaleContainer}>
        <img
          className={Style.exitCrossModale}
          src="/icons/exit-cross.svg"
          onClick={() => {
            exitModale(id);
            console.log(id);
          }}
        />
      </div>
      <div className={Style.modaleContentContainer}>
        <CellularActiveItem
          className={Style.icon}
          cellular={{
            iconLink: icon,
            name: "",
            description: "",
          }}
        />
        <div className={Style.modaleInfo}>
          <div>
            <h3>{modale.name}</h3>
            <p>{modale.desc}</p>
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
