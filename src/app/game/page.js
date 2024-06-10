import Image from "next/image";

import Styles from "./game.module.scss";

export default function Game() {
  return (
    <main className={Styles.Main}>
      <div className={Styles.GameContainer}>
        <Image
          className={Styles.BgImage}
          src="/images/game_nantes_img.png"
          width={500}
          height={800}
          alt="Game"
        />
      </div>
      <div className={Styles.GameBar}></div>
    </main>
  );
}
