import { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import '@splidejs/splide/dist/css/splide.min.css';

const SplideReact = () => {
  const mainRef = useRef();
  const thumbsRef = useRef();

  const mainOptions = {
    type: "loop",
    speed: 800,
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    arrows: false,
  };

  const thumbsOptions = {
    type: "slide",
    cover: true,
    fixedWidth: 160,
    fixedHeight: 120,
    gap: "1rem",
    speed: 800,
    rewind: true,
    pagination: false,
    arrows: false,
    isNavigation: true,
  };

  useEffect(() => {
    if (mainRef?.current && thumbsRef?.current && thumbsRef?.current?.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, [mainRef, thumbsRef]);

  return (
    <div className="building-widget-gallery">
      <div className="building-widget-main-slider">
        <Splide options={mainOptions} ref={mainRef}>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/1436x900" alt="description" loading="lazy" width="1436" height="900" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="building-widget-thumbs-slider">
        <Splide options={thumbsOptions} ref={thumbsRef}>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
          <SplideSlide>
            <img src="https://via.placeholder.com/160x120" alt="description" loading="lazy" width="160" height="120" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default SplideReact;
