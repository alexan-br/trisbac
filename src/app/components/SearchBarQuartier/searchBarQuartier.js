"use client";

import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

const SearchBarQuartier = ({ onSuggestionSelected }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Liste de mots pour l'autocomplétion
  const wordList = [
    "Nantes Nord",
    "Nantes Erdre",
    "Malakoff - Saint-Donatien",
    "Doulon - Bottière",
    "Centre Ville",
    "Ile de Nantes",
    "Dervallières - Zola",
    "Hauts Pavés - Saint Félix",
    "Breil - Barberie",
    "Nantes Sud",
    "Bellevue - Chantenay - Sainte Anne",
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
    placeholder: "Rechercher un quartier",
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
        if (value.length > 0 && (!children || children.length === 0)) {
          return <></>;
        }
        return <div {...containerProps}>{children}</div>;
      }}
    />
  );
};

export default SearchBarQuartier;
