import { useContext, useEffect } from "react";
import axios from "axios";

import BuildingProvider, {
  BuildingContext,
} from "../../context/BuildingContext";
import { NavContext } from "../../context/navContext";
import { buildingTestId } from "../../tests/constants";
import FilterContainer from "../../components/FilterContainer";
import FilterUnitType from "../../components/FilterUnitType";

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
          <img
            src="https://res.cloudinary.com/dpwbaabx2/image/upload/v1637840875/qicuhleb3p3favujg1ov.png"
            alt="description"
            loading="lazy"
            width="1436"
            height="1080"
            onClick={() => navContext.triggerTransition(hash, nextLink)}
          />
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
