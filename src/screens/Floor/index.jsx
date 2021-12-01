import { useContext } from "react";

import { NavContext } from "../../context/navContext";
import { BuildingContext } from "../../context/BuildingContext";
import { floorTestId } from "../../tests/constants";
import FilterContainer from "../../components/FilterContainer";
import FilterUnitType from "../../components/FilterUnitType";
import FilterFloor from "../../components/FilterFloor";

const Floor = ({ hash, nextLink, prevLink }) => {
  const navContext = useContext(NavContext);
  const { reset, buildingState } = useContext(BuildingContext);

  return (
    <div
      className="building-widget__container relative"
      data-testid={floorTestId}
    >
      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:w-8/12 xl:w-9/12 lg:pl-2">
          <div className="building-widget__img-block">
            <img
              src={buildingState.chosenFloorImage}
              alt="description"
              loading="lazy"
              width="1436"
              height="1080"
              onClick={() => navContext.triggerTransition(hash, nextLink)}
            />
          </div>
        </div>

        <div className="lg:w-4/12 xl:w-3/12 lg:pr-2">
          <div className="building-widget-block mx-auto">
            <div className="building-widget__logo text-center pb-5 mx-auto mb-16">
              <img
                src="https://res.cloudinary.com/dpwbaabx2/image/upload/v1637841004/euz7n8h5jsg3cd8nh8jc.png"
                alt="description"
                loading="lazy"
                width="193"
                height="86"
              />
            </div>

            <FilterContainer
              withBack={true}
              prevLink={prevLink}
              hash={hash}
              title={`${buildingState.chosenFloor}st Floor`}
            >
              <FilterFloor title="Select a floor" />
              <FilterUnitType reset={reset} title="Filter by unit type" />
            </FilterContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Floor;
