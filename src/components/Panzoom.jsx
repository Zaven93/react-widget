import { useRef, useEffect } from "react";
import { Panzoom as NativePanzoom } from "@fancyapps/ui/dist/panzoom.esm";
import { Controls } from "@fancyapps/ui/dist/panzoom.controls.esm";
import "@fancyapps/ui/dist/panzoom.css";
import "@fancyapps/ui/dist/panzoom.controls.css";

NativePanzoom.Plugins = {
  Controls,
};

const Panzoom = (props) => {
  const wrapper = useRef(null);

  useEffect(() => {
    if (!wrapper.current) return;
    const instance = new NativePanzoom(wrapper.current, props.options || {});

    return () => {
      instance.destroy();
    };
  }, [wrapper.current]);

  return (
    <div className="building-widget-panzoom panzoom" ref={wrapper}>
      <img className="panzoom__content" src={props.src} alt="description" />
    </div>
  );
};

export default Panzoom;
