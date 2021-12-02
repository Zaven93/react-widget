import { useContext, useEffect } from "react";
import axios from "axios";

import BuildingProvider, {
  BuildingContext,
} from "../../context/BuildingContext";
import { NavContext } from "../../context/navContext";
import { buildingTestId } from "../../tests/constants";
import FilterContainer from "../../components/FilterContainer";
import FilterUnitType from "../../components/FilterUnitType";
import ImageMap from "../../components/ImageMap";

const Building = ({ nextLink, prevLink, hash }) => {
  return (
    <BuildingProvider>
      <BuildingInner nextLink={nextLink} prevLink={prevLink} hash={hash} />
    </BuildingProvider>
  );
};

const BuildingInner = ({ nextLink, prevLink, hash }) => {
  const { buildingState, reset } = useContext(BuildingContext);
  const navContext = useContext(NavContext);

  const fetchProject = async () => {
    try {
      const { data } = await axios.get("draft.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const buildingImageOption = {
    id: 380,
    editor: { tool: "select", shapeCounter: { polys: 1 } },
    general: {
      name: "building",
      shortcode: "building",
      width: 4250,
      height: 5000,
      naturalWidth: 4250,
      naturalHeight: 5000,
    },
    image: {
      url: "https://realestatewidget.000webhostapp.com/files/Cam01_METRO_NAPLES_LOT2_02.png",
    },
    spots: [
      {
        id: "poly-3340",
        title: "6th Floor",
        type: "poly",
        x: 27.703,
        y: 55.777,
        width: 66.057,
        height: 14.122,
        default_style: {
          background_color: "",
          background_opacity: 0,
          stroke_color: "",
          stroke_opacity: 0,
        },
        mouseover_style: { background_color: "A18C46", stroke_color: "A18C46" },
        tooltip: { enable_tooltip: 0 },
        tooltip_content: {
          squares_settings: {
            containers: [
              {
                id: "sq-container-669571",
                settings: {
                  elements: [
                    {
                      settings: { name: "Heading", iconClass: "fa fa-header" },
                      options: { heading: { text: "6th Floor" } },
                    },
                  ],
                },
              },
            ],
          },
        },
        points: [
          { x: 0, y: 97.6048121935442 },
          { x: 0.23995667870036508, y: 70.81602890684506 },
          { x: 36.34247412755715, y: 0 },
          { x: 99.9999735258724, y: 71.76759692711666 },
          { x: 100, y: 100 },
          { x: 36.701997593261126, y: 43.057878761200854 },
        ],
      },
    ],
  };
  return (
    <div
      className="building-widget__container relative"
      data-testid={buildingTestId}
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
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:w-8/12 xl:w-9/12 lg:pl-2">
          <ImageMap
            imageOptions={buildingImageOption}
            onClick={() => navContext.triggerTransition(hash, nextLink)}
          />
          {/* <img
            src="https://res.cloudinary.com/dpwbaabx2/image/upload/v1637840875/qicuhleb3p3favujg1ov.png"
            alt="description"
            loading="lazy"
            width="1436"
            height="1080"
            onClick={() => navContext.triggerTransition(hash, nextLink)}
          /> */}
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
              prevLink={prevLink}
              hash={hash}
              title="Select a floor"
            >
              <FilterUnitType reset={reset} title="Filter by unit type" />
            </FilterContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
