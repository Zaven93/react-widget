import { useContext } from "react";

import { NavContext } from "../../context/navContext";
import { roomTestId } from "../../tests/constants";

const Room = ({ hash, prevLink, nextLink }) => {
  const navContext = useContext(NavContext);

  return (
    <div data-testid={roomTestId}>
      <h1>Room</h1>
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

export default Room;
