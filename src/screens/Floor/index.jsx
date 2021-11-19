import { useContext } from "react";

import { NavContext } from "../../context/navContext";
import { floorTestId } from "../../tests/constants";

const Floor = ({ hash, nextLink, prevLink }) => {
  const navContext = useContext(NavContext);

  return (
    <div data-testid={floorTestId}>
      <h1>Floor</h1>
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

export default Floor;
