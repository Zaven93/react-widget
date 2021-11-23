import { useContext, useEffect, useCallback } from "react";

import { NavContext } from "./context/navContext";
import Panzoom from "./components/Panzoom";

function App() {
  const navContext = useContext(NavContext);

  const renderScreen = () => {
    if (!navContext?.navigation) return;
    const { navigation } = navContext;
    const activeScreen = Object.entries(navigation).find(
      ([_, value]) => value?.active === true
    );

    if (!activeScreen.length) return;

    return activeScreen[1]?.component;
  };

  // if (!navContext) return <div>Loading...</div>;
  // return renderScreen();

  return (
    <Panzoom
      src="https://cdn.shopify.com/s/files/1/2829/0660/products/Lillydale-First-Floor_M_1024x1024.jpg?v=1578420411"
      options={{
        click: () => {
          alert("Clicked test test");
        },
      }}
    />
  );
}

export default App;
