import { createContext, useContext, useState } from "react";

const AppState = createContext();

export const CustomProvider = ({ children, value }) => {
  const [contextState, setContextState] = useState(value);
  return (
    <AppState.Provider value={{ ...contextState, setContextState }}>
      {children}
    </AppState.Provider>
  );
};
export const useAppState = () => useContext(AppState);
