import { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

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
    breakpoints: {
      767: {
        destroy: true,
      },
    },
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
    breakpoints: {
      767: {
        destroy: true,
      },
    },
  };

  useEffect(() => {
    if (mainRef?.current && thumbsRef?.current && thumbsRef?.current?.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, [mainRef, thumbsRef]);

  const floorImages = {
    1: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg",
    2: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/148099656.jpg?k=deea0b8cb989133477e9cd6f32312667e4ceb7d8ba6e2bf27cf559b041c1cf15&o=",
    3: "https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg",
    4: "https://media-cdn.tripadvisor.com/media/photo-s/02/8a/e6/d6/filename-120409-02-jpg.jpg",
    5: "https://www.lottehotel.com/content/dam/lotte-hotel/lotte/yangon/accommodation/hotel/suite/royalsuite/180712-49-2000-acc-yangon-hotel.jpg.thumb.768.768.jpg",
    6: "https://www.lotteresort.com/static/upload/images/20190508/6911a7a4-c182-4651-89e0-993164c51a13.jpg",
  };

  return (
    <div className="building-widget-gallery">
      <div className="building-widget-main-slider">
        <Splide options={mainOptions} ref={mainRef}>
          <SplideSlide>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg"
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/148099656.jpg?k=deea0b8cb989133477e9cd6f32312667e4ceb7d8ba6e2bf27cf559b041c1cf15&o="
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg"
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/02/8a/e6/d6/filename-120409-02-jpg.jpg"
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.lottehotel.com/content/dam/lotte-hotel/lotte/yangon/accommodation/hotel/suite/royalsuite/180712-49-2000-acc-yangon-hotel.jpg.thumb.768.768.jpg"
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.lotteresort.com/static/upload/images/20190508/6911a7a4-c182-4651-89e0-993164c51a13.jpg"
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg"
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/148099656.jpg?k=deea0b8cb989133477e9cd6f32312667e4ceb7d8ba6e2bf27cf559b041c1cf15&o="
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg"
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/02/8a/e6/d6/filename-120409-02-jpg.jpg"
              alt="description"
              loading="lazy"
              width="1436"
              height="900"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="building-widget-thumbs-slider hidden md:block">
        <Splide options={thumbsOptions} ref={thumbsRef}>
          <SplideSlide>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg"
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/148099656.jpg?k=deea0b8cb989133477e9cd6f32312667e4ceb7d8ba6e2bf27cf559b041c1cf15&o="
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg"
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/02/8a/e6/d6/filename-120409-02-jpg.jpg"
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.lottehotel.com/content/dam/lotte-hotel/lotte/yangon/accommodation/hotel/suite/royalsuite/180712-49-2000-acc-yangon-hotel.jpg.thumb.768.768.jpg"
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.lotteresort.com/static/upload/images/20190508/6911a7a4-c182-4651-89e0-993164c51a13.jpg"
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg"
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/148099656.jpg?k=deea0b8cb989133477e9cd6f32312667e4ceb7d8ba6e2bf27cf559b041c1cf15&o="
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg"
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/02/8a/e6/d6/filename-120409-02-jpg.jpg"
              alt="description"
              loading="lazy"
              width="160"
              height="120"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default SplideReact;
