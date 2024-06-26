import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

const SearchBar = ({ onSuggestionSelected }) => {
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

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleSuggestionSelected = (event, { suggestionValue }) => {
    onSuggestionSelected(suggestionValue); // Appeler la fonction de rappel avec la suggestion sélectionnée
  };

  const inputProps = {
    placeholder: "Rechercher une commune",
    value,
    onChange: onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={handleSuggestionSelected}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={(suggestion) => <div>{suggestion}</div>}
      inputProps={inputProps}
      renderSuggestionsContainer={({ containerProps, children }) => {
        if (value.length > 0 && suggestions.length === 0) {
          return <></>; // Retourner un fragment vide pour ne rien afficher
        }
        return <div {...containerProps}>{children}</div>;
      }}
    />
  );
};

export default SearchBar;
