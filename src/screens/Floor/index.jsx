import { useContext } from "react";

import { NavContext } from "../../context/navContext";
import { BuildingContext } from "../../context/BuildingContext";
import { floorTestId } from "../../tests/constants";
import { floorImageOption } from "../../tests/constants";
import FilterContainer from "../../components/FilterContainer";
import FilterUnitType from "../../components/FilterUnitType";
import FilterFloor from "../../components/FilterFloor";
import ImageMap from "../../components/ImageMap";

const Floor = ({ hash, nextLink, prevLink }) => {
  const navContext = useContext(NavContext);
  const { reset, buildingState } = useContext(BuildingContext);

  const { redirectToMain } = navContext;

  // const redirectToMain = () => {
  //   alert("Clicked");
  //   const { navigation } = navContext;

  //   console.log("Navigation from navContext", navigation);

  //   const mainLink = Object.keys(navigation).find(
  //     (key) => navigation[key].name === "Building"
  //   );

  //   console.log("Main link is", mainLink);

  //   navContext.triggerTransition(hash, mainLink);
  // };

  return (
    <div
      className="building-widget__container relative"
      data-testid={floorTestId}
    >
      <div className="lg:hidden">
        <div className="building-widget__logo text-center py-4 mx-auto mb-3">
          <img
            src="https://res.cloudinary.com/dpwbaabx2/image/upload/v1637841004/euz7n8h5jsg3cd8nh8jc.png"
            alt="description"
            loading="lazy"
            width="193"
            height="86"
            onClick={() => redirectToMain(hash)}
          />
        </div>

        <div className="building-widget-block">
          <button
            className="building-widget__btn-back inline-block relative"
            disabled={!prevLink}
            onClick={() => navContext.triggerTransition(hash, prevLink)}
          >
            Back
          </button>
        </div>
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:w-8/12 xl:w-9/12 lg:pl-2">
          <div className="building-widget__img-block">
            <ImageMap
              onClick={() => navContext.triggerTransition(hash, nextLink)}
              imageOptions={floorImageOption}
            />
          </div>
        </div>

        <div className="lg:w-4/12 xl:w-3/12 lg:pr-2">
          <div className="building-widget-block mx-auto">
            <div className="hidden lg:block">
              <div className="building-widget__logo text-center pb-5 mx-auto mb-16">
                <img
                  src="https://res.cloudinary.com/dpwbaabx2/image/upload/v1637841004/euz7n8h5jsg3cd8nh8jc.png"
                  alt="description"
                  loading="lazy"
                  width="193"
                  height="86"
                  onClick={() => redirectToMain(hash)}
                />
              </div>
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
