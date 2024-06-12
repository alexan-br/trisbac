// colorUtils.js
export const GreenColor = "#388e3c";
export const LightGreenColor = "#8bc34a";
export const YellowColor = "#ffeb3b";
export const OrangeColor = "#ffd700";

export const getColor = (nom) => {
  switch (nom) {
    case "NANTES":
      return LightGreenColor;
    case "REZE":
      return GreenColor;
    case "SAINT-HERBLAIN":
      return OrangeColor;
    case "ORVAULT":
      return YellowColor;
    case "SAUTRON":
      return LightGreenColor;
    case "COUERON":
      return YellowColor;
    case "BOUGUENAIS":
      return LightGreenColor;
    case "SAINT-SEBASTIEN-SUR-LOIRE":
      return OrangeColor;
    case "VERTOU":
      return YellowColor;
    case "BOUAYE":
      return GreenColor;
    case "LA MONTAGNE":
      return OrangeColor;
    case "CARQUEFOU":
      return LightGreenColor;
    case "SAINTE-LUCE-SUR-LOIRE":
      return GreenColor;
    case "BASSE-GOULAINE":
      return YellowColor;
    case "SAINTE-PAZANNE":
      return GreenColor;
    case "MAUVES-SUR-LOIRE":
      return OrangeColor;
    case "LA CHAPELLE-SUR-ERDRE":
      return YellowColor;
    case "LE PELLERIN":
      return LightGreenColor;
    case "SAINT-JEAN-DE-BOISEAU":
      return GreenColor;
    case "INDRE":
      return YellowColor;
    case "THOUARE-SUR-LOIRE":
      return LightGreenColor;
    case "SAINT-AIGNAN-GRANDLIEU":
      return OrangeColor;
    case "SAINT-LEGER-LES-VIGNES":
      return GreenColor;
    case "BRAINS":
      return LightGreenColor;
    case "LES SORINIERES":
      return YellowColor;
    default:
      return "#FFFFFF";
  }
};

export const getColorQuartier = (nom) => {
  switch (nom) {
    case "Nantes Nord":
      return GreenColor;
    case "Nantes Erdre":
      return LightGreenColor;
    case "Malakoff - Saint-Donatien":
      return YellowColor;
    case "Doulon - Bottière":
      return OrangeColor;
    case "Centre Ville":
      return OrangeColor;
    case "Ile de Nantes":
      return OrangeColor;
    case "Dervallières - Zola":
      return YellowColor;
    case "Hauts Pavés - Saint Félix":
      return LightGreenColor;
    case "Breil - Barberie":
      return GreenColor;
    case "Nantes Sud":
      return OrangeColor;
    case "Bellevue - Chantenay - Sainte Anne":
      return GreenColor;
    default:
      return OrangeColor; // Bleu pour les autres
  }
};
