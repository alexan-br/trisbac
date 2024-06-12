"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Cookies from "js-cookie";
import Style from "./tutocard.module.scss";

const steps = [
  {
    title: "Bienvenue sur l’Île de Nantes !",
    imgUrl: "/images/Image_elephant.png",
  },
  {
    title: "Aide-moi à nettoyer mon quartier.",
    imgUrl: "/images/Image_elephant.png",
  },
  {
    title: "Sélectionne les déchets et jette-les dans la poubelle appropriée.",
    imgUrl: "/images/Image_elephant.png",
  },
];

export default function TutoCard() {
  const [isOpen, setIsOpen] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (listRef.current) {
        setContainerWidth(listRef.current.getBoundingClientRect().width);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(listRef.current.scrollLeft);
    };

    const listElement = listRef.current;
    listElement.addEventListener("scroll", handleScroll);
    return () => listElement.removeEventListener("scroll", handleScroll);
  }, []);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      listRef.current.scrollBy({ left: containerWidth, behavior: "smooth" });
    } else {
      closeComponent();
      Cookies.set("FirstTime", "false");
    }
  };

  const previousStep = () => {
    if (scrollPosition > 0) {
      listRef.current.scrollBy({ left: -containerWidth, behavior: "smooth" });
    }
  };

  const closeComponent = () => {
    setIsOpen(false);
    Cookies.set("FirstTime", "false");
  };

  const currentStep = Math.round(scrollPosition / containerWidth);

  return (
    isOpen && (
      <div className={Style.tutoCardOverlay}>
        <div className={Style.tutoCard}>
          <div className={Style.header}>
            {currentStep === 0 ? (
              <svg
                className={Style.exitCrossModale}
                alt="Close"
                onClick={closeComponent}
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1652 10L20 18.8476L18.8476 20L10 11.1652L1.15237 20L0 18.8476L8.83483 10L0 1.15237L1.15237 0L10 8.83483L18.8476 0L20 1.15237L11.1652 10Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                className={Style.arrowBack}
                alt="Previous"
                onClick={previousStep}
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.283406 9.91731L10.4666 0.251378C10.6365 0.0900159 10.8623 -4.74805e-07 11.097 -4.85066e-07C11.3318 -4.95327e-07 11.5575 0.0900159 11.7274 0.251378L11.7384 0.2623C11.821 0.340526 11.8869 0.434684 11.9318 0.539049C11.9768 0.643414 12 0.755803 12 0.869379C12 0.982955 11.9768 1.09534 11.9318 1.19971C11.8869 1.30407 11.821 1.39823 11.7384 1.47646L2.14902 10.5781L11.7384 19.6761C11.821 19.7543 11.8869 19.8485 11.9318 19.9528C11.9768 20.0572 12 20.1696 12 20.2832C12 20.3967 11.9768 20.5091 11.9318 20.6135C11.8869 20.7179 11.821 20.812 11.7384 20.8902L11.7274 20.9012C11.5575 21.0625 11.3318 21.1525 11.097 21.1525C10.8623 21.1525 10.6365 21.0625 10.4666 20.9012L0.283406 11.2352C0.193849 11.1502 0.122552 11.048 0.0738359 10.9347C0.0251203 10.8214 4.6769e-07 10.6995 4.62303e-07 10.5763C4.56917e-07 10.453 0.0251202 10.3311 0.0738359 10.2178C0.122552 10.1046 0.193849 10.0023 0.283406 9.91731Z"
                  fill="black"
                />
              </svg>
            )}
          </div>

          <div className={Style.carouselContainer}>
            <div className={Style.carouselList} ref={listRef}>
              {steps.map((step, index) => (
                <div key={index} className={Style.carouselItem}>
                  <img src={step.imgUrl} />
                  <p>{step.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={Style.stepNav}>
            <div></div>
            <div className={Style.indicators}>
              {steps.map((_, index) => (
                <span
                  key={index}
                  className={`${Style.indicator} ${
                    currentStep === index ? Style.active : ""
                  }`}
                />
              ))}
            </div>
            <button onClick={nextStep} className={Style.nextButton}>
              {currentStep < steps.length - 1 ? "Suivant" : "Commencer"}
            </button>
          </div>
        </div>
      </div>
    )
  );
}
