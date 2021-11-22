import { useContext } from "react";

import { NavContext } from "../../context/navContext";
import { buildingTestId } from "../../tests/constants";

const Building = ({ nextLink, prevLink, hash }) => {
  const navContext = useContext(NavContext);

  return (
    <div data-testid={buildingTestId} className="p-6 items-center justify-center" >
      <h1 className="tk-futura-pt">Building</h1>
      <h2 className="tk-futura-pt">Title 1</h2>
      <h2 className="tk-futura-pt-condensed">Title 2</h2>
      <h2 className="tk-futura-pt-bold">Title 3</h2>
      <div className="button-container">
        <button
          disabled={!prevLink}
          onClick={() => navContext.triggerTransition(hash, prevLink)}
        >
          Prev
        </button>
        <button
          disabled={!nextLink}
          onClick={() => navContext.triggerTransition(hash, nextLink)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Building;
