export const buildingTestId = /building-screen/;
export const floorTestId = /floor-screen/;
export const roomTestId = /room-screen/;

export const buildingImageOption = {
  id: 380,
  editor: { tool: "select", shapeCounter: { polys: 1 } },
  general: {
    name: "building",
    shortcode: "building",
    width: 4250,
    height: 5000,
    naturalWidth: 4250,
    naturalHeight: 5000,
  },
  image: {
    url: "https://realestatewidget.000webhostapp.com/files/Cam01_METRO_NAPLES_LOT2_02.png",
  },
  spots: [
    {
      id: "poly-3340",
      title: "6th Floor",
      type: "poly",
      x: 27.703,
      y: 55.777,
      width: 66.057,
      height: 14.122,
      default_style: {
        background_color: "",
        background_opacity: 0,
        stroke_color: "",
        stroke_opacity: 0,
      },
      mouseover_style: { background_color: "A18C46", stroke_color: "A18C46" },
      tooltip: { enable_tooltip: 0 },
      tooltip_content: {
        squares_settings: {
          containers: [
            {
              id: "sq-container-669571",
              settings: {
                elements: [
                  {
                    settings: { name: "Heading", iconClass: "fa fa-header" },
                    options: { heading: { text: "6th Floor" } },
                  },
                ],
              },
            },
          ],
        },
      },
      points: [
        { x: 0, y: 97.6048121935442 },
        { x: 0.23995667870036508, y: 70.81602890684506 },
        { x: 36.34247412755715, y: 0 },
        { x: 99.9999735258724, y: 71.76759692711666 },
        { x: 100, y: 100 },
        { x: 36.701997593261126, y: 43.057878761200854 },
      ],
    },
  ],
};

export const floorImageOption = {
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
    url: "https://realestatewidget.000webhostapp.com/files/AMN-FP-Floor_FL6_Labeled.png",
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
                    settings: { name: "Heading", iconClass: "fa fa-header" },
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
};
