import { createContext, useContext, useState } from "react";

const AppState = createContext();

c

export const useAppState = () => useContext(AppState);
