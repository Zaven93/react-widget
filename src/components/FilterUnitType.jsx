import FilterSelectors from "./FilterSelectors";

const FilterUnitType = ({ title, reset }) => {
  return (
    <details className="building-widget-open-close">
      <summary className="building-widget-open-close__opener">{title}</summary>
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
  );
};

export default FilterUnitType;
