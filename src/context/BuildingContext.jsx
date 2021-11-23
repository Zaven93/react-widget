import { createContext, useReducer } from "react";

export const BuildingContext = createContext();

const { Provider } = BuildingContext;

const initialState = {
  chosenBathroom: 1,
  chosenBedroom: 1,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_BATHROOM":
      return {
        ...state,
        chosenBathroom: payload,
      };
    case "SET_BEDROOM":
      return {
        ...state,
        chosenBedroom: payload,
      };
    case "RESET":
      return {
        chosenBedroom: 1,
        chosenBathroom: 1,
      };
    default:
      return state;
  }
};

export const BuildingProvider = ({ children }) => {
  const [buildingState, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ buildingState, dispatch }}>{children}</Provider>;
};

export default BuildingProvider;
