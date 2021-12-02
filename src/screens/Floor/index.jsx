import { useContext } from "react";

import { NavContext } from "../../context/navContext";
import { BuildingContext } from "../../context/BuildingContext";
import { floorTestId } from "../../tests/constants";
import FilterContainer from "../../components/FilterContainer";
import FilterUnitType from "../../components/FilterUnitType";
import FilterFloor from "../../components/FilterFloor";
import ImageMap from "../../components/ImageMap";

const Floor = ({ hash, nextLink, prevLink }) => {
  const navContext = useContext(NavContext);
  const { reset, buildingState } = useContext(BuildingContext);

  const floorImageOption = {
    id: 1209,
    editor: {
      selected_shape: "poly-6689",
      tool: "poly",
      shapeCounter: { polys: 1 },
    },
    general: {
      name: "Floor 6 601",
      shortcode: "Floor6601",
      width: 2032,
      height: 3216,
      naturalWidth: 2032,
      naturalHeight: 3216,
    },
    image: {
      url: "https://realestatewidget.000webhostapp.com/files/AMN-FP-Floor_FL6_Labeled.png",
    },
    spots: [
      {
        id: "poly-6689",
        title: "601",
        type: "poly",
        x: 56.521,
        y: 6.294,
        width: 32.552,
        height: 23.404,
        actions: { click: "follow-link" },
        tooltip: { enable_tooltip: 0 },
        tooltip_content: {
          squares_settings: {
            containers: [
              {
                id: "sq-container-403761",
                settings: {
                  elements: [
                    {
                      settings: { name: "Heading", iconClass: "fa fa-header" },
                      options: { heading: { text: "Poly 0" } },
                    },
                  ],
                },
              },
            ],
          },
        },
        points: [
          { x: 16.37931034482759, y: 0 },
          { x: 67.45689655172413, y: 0 },
          { x: 67.45689655172413, y: 15.530303030303031 },
          { x: 100, y: 15.909090909090908 },
          { x: 100, y: 99.81060606060606 },
          { x: 13.577586206896555, y: 100 },
          { x: 12.715517241379311, y: 67.23484848484848 },
          { x: 16.37931034482759, y: 67.42424242424242 },
          { x: 16.37931034482759, y: 51.32575757575758 },
          { x: 0, y: 51.515151515151516 },
          { x: 0, y: 37.878787878787875 },
          { x: 16.163793103448278, y: 37.878787878787875 },
        ],
      },
    ],
  };

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
            {/* <img
              src={buildingState.chosenFloorImage}
              alt="description"
              loading="lazy"
              width="1436"
              height="1080"
              onClick={() => navContext.triggerTransition(hash, nextLink)}
            /> */}
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
