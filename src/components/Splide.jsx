import { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Splide = () => {
  const mainRef = useRef();
  const thumbsRef = useRef();

  const mainOptions = {
    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    height: "10rem",
  };

  const thumbsOptions = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
  };

  useEffect(() => {
    if (mainRef?.current && thumbsRef?.current && thumbsRef?.current?.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, [mainRef, thumbsRef]);

  return (
    <div className="wrapper">
      <Splide options={mainOptions} ref={mainRef}>
        <SplideSlide></SplideSlide>
      </Splide>
      <Splide options={thumbsOptions} ref={thumbsRef}>
        <SplideSlide></SplideSlide>
      </Splide>
    </div>
  );
};

export default Splide;
