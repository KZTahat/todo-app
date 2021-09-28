import React, { useState } from "react";

export const SettingsContext = React.createContext('default');

export default function SettingsProvider(props) {
  let [showCompleted, setCompleted] = useState(true);
  let [itemsNumber, setitemsNumber] = useState(3);
  let [sortType, setsortType] = useState("Difficulty");

  let state = {
    showCompleted,
    itemsNumber,
    sortType,
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
