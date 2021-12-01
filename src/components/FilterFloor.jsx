import { useContext } from "react";

import { BuildingContext } from "../context/BuildingContext";

const FilterFloor = ({ title }) => {
  const { dispatch, buildingState } = useContext(BuildingContext);

  const setFloor = (value) => dispatch({ type: "SET_FLOOR", payload: value });
  return (
    <details className="building-widget-open-close building-widget-open-close--alt">
      <summary className="building-widget-open-close__opener uppercase">{title}</summary>
      <div className="building-widget-open-close__slide pt-2">
        <div className="-mb-2">
          <div className="mb-4">
            <ul className="building-widget__floor-list uppercase">
              {[...Array(6).keys()].map((i) => (
                <li
                  className={buildingState.chosenFloor === i + 1 && "active"}
                  key={i}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setFloor(i + 1);
                    }}
                  >
                    {i + 1}st Floor
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </details>
  );
};

export default FilterFloor;
