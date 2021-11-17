import { useContext } from "react";

import { NavContext } from "../context/navContext";

const Room = ({ hash, prevLink, nextLink }) => {
  const { triggerTransition } = useContext(NavContext);

  return (
    <div>
      <h1>Room</h1>
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

export default Room;
