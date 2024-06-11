"use client";
import Image from "next/image";
import React from "react";
import { Children } from "react";

import Style from "./gameresultmodale.module.scss";

export default function GameResultModale({
  id,
  icon,
  modale,
  children,
  exitModale,
}) {
  return (
    <div id={id} className={Style.gameResultModaleContainer}>
      <div className={Style.modaleContentContainer}>
        <div className={Style.modaleInfo}>
          <div className={Style.resultMessage}>
            <h3>{modale.name}</h3>
            <Image
              src="/images/Ile-de-Nantes-Mascotte.png"
              className={Style.Mascotte}
              width={100}
              height={100}
              alt="Mascotte"
            />
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
