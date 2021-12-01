import { useContext } from "react";

import { NavContext } from "../context/navContext";
import Button from "../components/Button";

const FilterContainer = ({ title, withBack, children, prevLink, hash }) => {
  const navContext = useContext(NavContext);

  return (
    <form className="building-widget-form">
      <fieldset>
        <legend className="visually-hidden">Floor filter form</legend>
        {withBack && (
          <div className="hidden lg:block">
            <Button
              className="building-widget__btn-back inline-block relative mb-1"
              disabled={!prevLink}
              onClick={() => navContext.triggerTransition(hash, prevLink)}
              title="Back"
            />
          </div>
        )}
        <div className="building-widget-block__title uppercase mb-2">{title}</div>
        {children}
      </fieldset>
    </form>
  );
};

export default FilterContainer;
