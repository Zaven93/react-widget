import { useContext } from "react";

import { NavContext } from "../context/navContext";

const Building = ({ nextLink, prevLink, hash }) => {
  const { triggerTransition } = useContext(NavContext);

  return (
    <div>
      <h1>Building</h1>
      <div className="button-container">
        <button
          disabled={!prevLink}
          onClick={() => triggerTransition(hash, prevLink)}
        >
          Prev
        </button>
        <button
          disabled={!nextLink}
          onClick={() => triggerTransition(hash, nextLink)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Building;
