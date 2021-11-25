import { createContext, useReducer } from "react";

export const BuildingContext = createContext();

const { Provider } = BuildingContext;

const floorImages = {
  1: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg",
  2: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/148099656.jpg?k=deea0b8cb989133477e9cd6f32312667e4ceb7d8ba6e2bf27cf559b041c1cf15&o=",
  3: "https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg",
  4: "https://media-cdn.tripadvisor.com/media/photo-s/02/8a/e6/d6/filename-120409-02-jpg.jpg",
  5: "https://www.lottehotel.com/content/dam/lotte-hotel/lotte/yangon/accommodation/hotel/suite/royalsuite/180712-49-2000-acc-yangon-hotel.jpg.thumb.768.768.jpg",
  6: "https://www.lotteresort.com/static/upload/images/20190508/6911a7a4-c182-4651-89e0-993164c51a13.jpg",
};

const initialState = {
  chosenBathroom: 1,
  chosenBedroom: 1,
  chosenFloor: 1,
  chosenFloorImage: floorImages[1],
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
    case "SET_FLOOR":
      return {
        ...state,
        chosenFloor: payload,
        chosenFloorImage: floorImages[payload],
      };
    case "RESET":
      return {
        ...state,
        chosenBedroom: 1,
        chosenBathroom: 1,
      };
    default:
      return state;
  }
};

export const BuildingProvider = ({ children }) => {
  const [buildingState, dispatch] = useReducer(reducer, initialState);

  const reset = () => dispatch({ type: "RESET" });

  return (
    <Provider value={{ buildingState, dispatch, reset }}>{children}</Provider>
  );
};

export default BuildingProvider;
