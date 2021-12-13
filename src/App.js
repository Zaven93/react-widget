import { useContext, useEffect, useCallback } from "react";

import { NavContext } from "./context/navContext";

function App() {
  const navContext = useContext(NavContext);
  console.log("Test message");

  const renderScreen = () => {
    if (!navContext?.navigation) return;
    const { navigation } = navContext;
    const activeScreen = Object.entries(navigation).find(
      ([_, value]) => value?.active === true
    );

    if (!activeScreen.length) return;

    return activeScreen[1]?.component;
  };

  if (!navContext) return <div>Loading...</div>;
  return renderScreen();
}

export default App;
