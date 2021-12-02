/* eslint-disable */
import { useEffect } from "react";
import "../image-map-pro/css/image-map-pro.min.css";
import "../image-map-pro/js/jquery.min.js";
import "../image-map-pro/js/image-map-pro.min.js";

const ImageMap = ({ onClick, imageOptions }) => {
  useEffect(() => {
    const imageProContainer = $("#image-map-pro-container")[0];
    $(imageProContainer).imageMapPro(imageOptions);
  }, []);

  return (
    <>
      <div onClick={onClick} id="image-map-pro-container"></div>
    </>
  );
};

export default ImageMap;
