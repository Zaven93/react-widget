import { useContext } from "react";

import { BuildingContext } from "../context/BuildingContext";

const FilterItem = ({ value, actionType, stateType }) => {
  const { dispatch, buildingState } = useContext(BuildingContext);

  return (
    <div className="building-widget-form__custom-input mr-3 mb-3">
      <input
        type="checkbox"
        name="building-widget-form__bedrooms"
        value={value}
        checked={parseInt(value) === buildingState[stateType]}
        onChange={(e) =>
          dispatch({ type: actionType, payload: parseInt(e.target.value) })
        }
        id={`building-widget-form__bedrooms-${actionType}-${value}`}
      />
      <label
        className="building-widget-form__custom-label"
        htmlFor={`building-widget-form__bedrooms-${actionType}-${value}`}
      >
        {value}
      </label>
    </div>
  );
};

export default FilterItem;
