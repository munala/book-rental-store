import { createContext } from "react";

export const initialState = false;

const LoadingContext = createContext(initialState);

export default LoadingContext;
