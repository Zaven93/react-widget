/* eslint-disable */
import { useEffect } from "react";
import "../image-map-pro/css/image-map-pro.min.css";
import "../image-map-pro/js/jquery.min.js";
import "../image-map-pro/js/image-map-pro.min.js";

const ImageMap = ({ onClick, imageOptions }) => {
  useEffect(() => {
    const imageProContainer = $("#image-map-pro-container")[0];
    $(imageProContainer).imageMapPro(imageOptions);
    $.imageMapProEventClickedShape = function (imageMapName, shapeName) {
      // First, check which image map and which shape triggered the event
      // We want to listen for events only from the image map “Building”
      if (imageMapName == "building" || imageMapName == "Floor 6") {
        onClick();
      }

      // Repeat for each floor
      // …
    };
  }, []);

  return <div id="image-map-pro-container"></div>;
};

export default ImageMap;
