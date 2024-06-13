"use client";

import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import Styles from "./searchBar.module.scss";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Liste de mots pour l'autocomplétion
  const wordList = [
    "NANTES",
    "REZE",
    "SAINT-HERBLAIN",
    "ORVAULT",
    "SAUTRON",
    "COUERON",
    "BOUGUENAIS",
    "SAINT-SEBASTIEN-SUR-LOIRE",
    "VERTOU",
    "BOUAYE",
    "LA MONTAGNE",
    "CARQUEFOU",
    "SAINTE-LUCE-SUR-LOIRE",
    "BASSE-GOULAINE",
    "SAINTE-PAZANNE",
    "MAUVES-SUR-LOIRE",
    "LA CHAPELLE-SUR-ERDRE",
    "LE PELLERIN",
    "SAINT-JEAN-DE-BOISEAU",
    "INDRE",
    "THOUARE-SUR-LOIRE",
    "SAINT-AIGNAN-GRANDLIEU",
    "SAINT-LEGER-LES-VIGNES",
    "BRAINS",
    "LES SORINIERES",
  ];

  // Fonction pour filtrer les suggestions
  const getSuggestions = (inputValue) => {
    return wordList.filter((word) =>
      word.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  // Fonction pour gérer les changements de texte dans la barre de recherche
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  // Fonction pour afficher les suggestions d'autocomplétion
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Fonction pour vider les suggestions d'autocomplétion
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Fonction pour gérer le clic sur une suggestion
  const onSuggestionSelected = (event, { suggestionValue }) => {
    // Effectuer une action en fonction du mot sélectionné
    console.log(`Mot sélectionné : ${suggestionValue}`);
  };

  // Configuration pour le composant Autosuggest
  const inputProps = {
    placeholder: "Rechercher un mot...",
    value,
    onChange: onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={(suggestion) => <div>{suggestion}</div>}
      inputProps={inputProps}
      renderSuggestionsContainer={({ containerProps, children, query }) => {
        if (value.length > 0 && (!children || children.length === 0)) {
          return <div>Aucuns résultat possible.</div>;
        }
        return <div {...containerProps}>{children}</div>;
      }}
    />
  );
};

export default SearchBar;
