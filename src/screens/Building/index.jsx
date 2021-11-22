import { useContext } from "react";

import { NavContext } from "../../context/navContext";
import { buildingTestId } from "../../tests/constants";

const Building = ({ nextLink, prevLink, hash }) => {
  const navContext = useContext(NavContext);

  return (
    <div
      data-testid={buildingTestId}
      className="p-6 items-center justify-center"
    >
      <div className="w-1/2">1</div>
      <div className="w-1/2">2</div>
      <h1>Building</h1>
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
