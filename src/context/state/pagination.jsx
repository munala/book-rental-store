import { createContext } from "react";
import { MAX_PER_PAGE } from "../../constants/services";

export const initialState = {
  page: 1,
  size: MAX_PER_PAGE
};

const PaginationContext = createContext(initialState);

export default PaginationContext;
