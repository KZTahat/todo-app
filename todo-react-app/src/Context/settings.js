import React from "react";

export const SettingsContext = React.createContext();

export default function settingsProvider(props) {
  let state = {
    displayCompleted: true,
    itemsNumber: 3,
    sortType: "Difficulty",
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}