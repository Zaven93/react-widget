/* eslint-disable */
import { useEffect } from "react";
import "../image-map-pro/css/image-map-pro.min.css";
import "../image-map-pro/js/jquery.min.js";
import "../image-map-pro/js/image-map-pro.min.js";

const ImageMap = ({ onClick }) => {
  useEffect(() => {
    const imageProContainer = $("#image-map-pro-container")[0];
    console.log("Image pro container is", imageProContainer);
    $(imageProContainer).imageMapPro({
      id: 1209,
      editor: {
        selected_shape: "poly-6689",
        tool: "poly",
        shapeCounter: { polys: 1 },
      },
      general: {
        name: "Floor 6 601",
        shortcode: "Floor6601",
        width: 2032,
        height: 3216,
        naturalWidth: 2032,
        naturalHeight: 3216,
      },
      image: {
        url: "https://cdn.shopify.com/s/files/1/0012/0930/3112/files/AMN-FP-Floor_FL6_Labeled.png",
      },
      spots: [
        {
          id: "poly-6689",
          title: "601",
          type: "poly",
          x: 56.521,
          y: 6.294,
          width: 32.552,
          height: 23.404,
          actions: { click: "follow-link" },
          tooltip: { enable_tooltip: 0 },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-403761",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: { heading: { text: "Poly 0" } },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 16.37931034482759, y: 0 },
            { x: 67.45689655172413, y: 0 },
            { x: 67.45689655172413, y: 15.530303030303031 },
            { x: 100, y: 15.909090909090908 },
            { x: 100, y: 99.81060606060606 },
            { x: 13.577586206896555, y: 100 },
            { x: 12.715517241379311, y: 67.23484848484848 },
            { x: 16.37931034482759, y: 67.42424242424242 },
            { x: 16.37931034482759, y: 51.32575757575758 },
            { x: 0, y: 51.515151515151516 },
            { x: 0, y: 37.878787878787875 },
            { x: 16.163793103448278, y: 37.878787878787875 },
          ],
        },
      ],
    });
    $.imageMapProEventHighlightedShape = function (imageMapName, shapeName) {
      console.log(shapeName);
    };
  }, []);

  return (
    <>
      <div onClick={onClick} id="image-map-pro-container"></div>
    </>
  );
};

export default ImageMap;
