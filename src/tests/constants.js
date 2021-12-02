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
  id: 6074,
  editor: { tool: "select", shapeCounter: { polys: 1 } },
  general: {
    name: "Floor 6",
    shortcode: "Floor6",
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
      id: "poly-9801",
      title: "601",
      type: "poly",
      x: 56.567,
      y: 4.579,
      width: 36.708,
      height: 25.222,
      actions: { open_link_in_new_window: 0 },
      tooltip: { enable_tooltip: 0 },
      tooltip_style: { background_color: "#cccccc" },
      tooltip_content: {
        squares_settings: {
          containers: [
            {
              id: "sq-container-603181",
              settings: {
                elements: [
                  {
                    settings: { name: "Heading", iconClass: "fa fa-header" },
                    options: { heading: { text: "601" } },
                  },
                ],
              },
            },
          ],
        },
      },
      points: [
        { x: 14.48087431693989, y: 6.783919597989948 },
        { x: 32.10382513661204, y: 6.783919597989948 },
        { x: 32.10382513661204, y: 3.2663316582914574 },
        { x: 100, y: 0 },
        { x: 94.26229508196725, y: 75.50251256281409 },
        { x: 88.6612021857923, y: 75.7537688442211 },
        { x: 88.6612021857923, y: 99.37185929648241 },
        { x: 11.475409836065571, y: 100 },
        { x: 11.065977489601178, y: 69.22257788944722 },
        { x: 14.481681755158629, y: 69.34650753768845 },
        { x: 14.48087431693989, y: 54.77386934673366 },
        { x: 0, y: 54.77386934673366 },
        { x: 0.1366120218579244, y: 42.33668341708543 },
        { x: 14.754098360655737, y: 42.085427135678394 },
      ],
    },
  ],
};
