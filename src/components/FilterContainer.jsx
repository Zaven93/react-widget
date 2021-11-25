import { useContext } from "react";

import { BuildingContext } from "../context/BuildingContext";
import FilterSelectors from "./FilterSelectors";

const FilterContainer = ({ title }) => {
  const { buildingState, dispatch } = useContext(BuildingContext);

  const reset = () => dispatch({ type: "RESET" });

  return (
    <form className="building-widget-form" action="#">
      <fieldset>
        <legend className="visually-hidden">Floor filter form</legend>

        <div className="building-widget-block__title mb-4">
          {/* Select a floor  */}
          {title}
        </div>

        <details className="building-widget-open-close">
          <summary className="building-widget-open-close__opener">
            Filter by unit type
          </summary>
          <div className="building-widget-open-close__slide pt-4">
            <div className="-mb-4">
              <div className="mb-4">
                <button
                  className="building-widget-form__button"
                  type="reset"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
              <FilterSelectors
                title="Bedrooms"
                count={4}
                actionType="SET_BEDROOM"
                stateType="chosenBedroom"
              />
              <FilterSelectors
                title="Bathrooms"
                count={4}
                actionType="SET_BATHROOM"
                stateType="chosenBathroom"
              />
            </div>
          </div>
        </details>
      </fieldset>
    </form>
  );
};

export default FilterContainer;
