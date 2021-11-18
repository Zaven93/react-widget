import NavProvider from "../context/navContext";

export const wrapNavProvider = (Component) => (
  <NavProvider>{Component}</NavProvider>
);
