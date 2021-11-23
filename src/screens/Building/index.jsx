import { useContext, useEffect } from "react";
import axios from "axios";

import BuildingProvider, {
  BuildingContext,
} from "../../context/BuildingContext";
import { NavContext } from "../../context/navContext";
import { buildingTestId } from "../../tests/constants";
import FilterContainer from "../../components/FilterContainer";

const Building = ({ nextLink, prevLink, hash }) => {
  return (
    <BuildingProvider>
      <BuildingInner nextLink={nextLink} prevLink={prevLink} hash={hash} />
    </BuildingProvider>
  );
};

const BuildingInner = ({ nextLink, prevLink, hash }) => {
  const { buildingState } = useContext(BuildingContext);
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
      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:w-8/12 xl:w-9/12 lg:pl-2">
          <img
            src="https://via.placeholder.com/1436x1080"
            alt="description"
            loading="lazy"
            width="1436"
            height="1080"
            onClick={() => {
              alert(`You've chosen ${JSON.stringify(buildingState)}`);
              navContext.triggerTransition(hash, nextLink);
            }}
          />
        </div>

        <div className="lg:w-4/12 xl:w-3/12 lg:pr-2">
          <div className="building-widget-block mx-auto">
            <div className="building-widget__logo text-center pb-5 mx-auto mb-16">
              <img
                src="https://via.placeholder.com/193x86"
                alt="description"
                loading="lazy"
                width="193"
                height="86"
              />
            </div>

            <FilterContainer title="Select a floor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
