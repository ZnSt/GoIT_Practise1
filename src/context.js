import { createContext, useContext } from "react";

export const AppState = createContext();
export const useAppState = () => useContext(AppState);
