import { useContext, useEffect, useCallback } from "react";

import "./App.css";
import { NavContext } from "./context/navContext";

function App() {
  const { navigation } = useContext(NavContext);

  const renderScreen = useCallback(() => {
    if (!navigation) return;
    const activeScreen = Object.entries(navigation).find(
      ([_, value]) => value?.active === true
    );

    if (!activeScreen.length) return;

    return activeScreen[1]?.component;
  }, [navigation]);

  useEffect(() => {
    renderScreen();
  }, [renderScreen]);

  return navigation && renderScreen();
}

export default App;
