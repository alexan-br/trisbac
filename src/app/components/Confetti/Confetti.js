import React, { useEffect } from "react";
import Styles from "./Confetti.module.scss";

const Confetti = () => {
  useEffect(() => {
    const confettiContainer = document.getElementById("confetti-container");
    const confettiCount = 20;
    const confettiImages = Array.from(
      { length: confettiCount },
      (_, i) => `/images/confettis/confetti${i + 1}.svg`
    );

    confettiImages.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add(Styles.confetti);
      img.style.animationDelay = `${Math.random() * 0.3}s`; // Random delay within 0.5s

      // Random initial position within a 10px radius from the center
      const offsetX = Math.random() * 100 - 50;
      const offsetY = Math.random() * 100 - 50;
      img.style.setProperty("--initial-x", `${offsetX}px`);
      img.style.setProperty("--initial-y", `${offsetY}px`);

      // Random directions and rotation
      img.style.setProperty("--x-dir", `${Math.random() * 200 - 100}px`);
      img.style.setProperty("--y-dir", `${Math.random() * 200 - 100}px`);
      img.style.setProperty("--rotation", `${Math.random() * 720 - 360}deg`);

      confettiContainer.appendChild(img);
    });

    return () => {
      confettiContainer.innerHTML = "";
    };
  }, []);

  return (
    <div id="confetti-container" className={Styles.confettiContainer}></div>
  );
};

export default Confetti;
