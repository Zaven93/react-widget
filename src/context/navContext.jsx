import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Building from "../screens/Building";
import Floor from "../screens/Floor";
import Room from "../screens/Room";

export const NavContext = createContext();

const { Provider } = NavContext;

const settleNav = () => {
  const page1 = uuidv4();
  const page2 = uuidv4();
  const page3 = uuidv4();

  return {
    [page1]: {
      name: "Building",
      prevLink: null,
      nextLink: page2,
      active: true,
      component: (
        <Building hash={page1} active={true} nextLink={page2} prevLink={null} />
      ),
    },
    [page2]: {
      name: "Floor",
      prevLink: page1,
      nextLink: page3,
      active: false,
      component: (
        <Floor hash={page2} active={false} nextLink={page3} prevLink={page1} />
      ),
    },
    [page3]: {
      name: "Room",
      prevLink: page2,
      nextLink: null,
      active: false,
      component: (
        <Room hash={page3} active={false} nextLink={null} prevLink={page2} />
      ),
    },
  };
};

const NavProvider = ({ children }) => {
  const [navigation, setNavigation] = useState(settleNav());

  const triggerTransition = (inactivateLink, activateLink) => {
    if (!inactivateLink || !activateLink) return;
    const keyToInactivate = Object.keys(navigation).find(
      (key) => key === inactivateLink
    );

    setNavigation({
      ...navigation,
      [keyToInactivate]: { ...navigation[keyToInactivate], active: false },
      [activateLink]: { ...navigation[activateLink], active: true },
    });

    localStorage.setItem(
      "navStatus",
      JSON.stringify({
        activate: activateLink,
        inactivate: keyToInactivate,
      })
    );
  };

  const redirectToMain = (hash) => {
    const mainLink = Object.keys(navigation).find(
      (key) => navigation[key].name === "Building"
    );

    triggerTransition(hash, mainLink);
  };

  return (
    <Provider
      value={{ navigation, setNavigation, triggerTransition, redirectToMain }}
    >
      {children}
    </Provider>
  );
};

export default NavProvider;
