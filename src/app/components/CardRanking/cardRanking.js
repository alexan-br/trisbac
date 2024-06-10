import Image from "next/image";

import Styles from "./cardRanking.module.scss";

const CardRanking = ({
  title,
  position,
  valueWeight,
  iconMascotte,
  colorCard,
}) => {
  return (
    <div className={`${Styles.Card} ${Styles[colorCard]}`}>
      <Image src={iconMascotte} width={40} height={40} alt={title} />

      <div className={Styles.Content}>
        <div className={Styles.ContainerTitle}>
          <h2>{title}</h2>
        </div>
        <h3>{position}éme</h3>
      </div>
      <div className={Styles.ValueWeight}>
        <svg
          width="43"
          height="77"
          viewBox="0 0 43 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43 0H42.8259L0 77H43V0Z"
            fill="black"
          />
        </svg>
        <div className={Styles.ContainerValueWeight}>
          <p>{valueWeight}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRanking;
