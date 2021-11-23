import FilterItem from "./FilterItem";

const FilterSelectors = ({ title, count, actionType, stateType }) => {
  return (
    <div className="mb-4">
      <div className="mb-2">{title}</div>
      <div className="flex flex-wrap -mr-3 -mb-3">
        {[...Array(count).keys()].reverse().map((i) => (
          <FilterItem
            key={i}
            value={i + 1}
            actionType={actionType}
            stateType={stateType}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSelectors;
