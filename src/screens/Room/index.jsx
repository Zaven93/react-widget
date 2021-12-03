import { useContext, useState } from "react";

import { NavContext } from "../../context/navContext";
import { roomTestId } from "../../tests/constants";

import Panzoom from "../../components/Panzoom";
import Splide from "../../components/Splide";

const Room = ({ hash, prevLink, nextLink }) => {
  const [renderActive, setRenderActive] = useState(false);
  const navContext = useContext(NavContext);

  const { redirectToMain } = navContext;

  return (
    <div
      className="building-widget__container relative"
      data-testid={roomTestId}
    >
      <div className="lg:hidden">
        <div className="building-widget__logo text-center py-4 mx-auto mb-3">
          <img
            src="https://res.cloudinary.com/dpwbaabx2/image/upload/v1637841004/euz7n8h5jsg3cd8nh8jc.png"
            alt="description"
            loading="lazy"
            width="193"
            height="86"
            onClick={() => redirectToMain(hash)}
          />
        </div>

        <div className="building-widget-block">
          <button
            className="building-widget__btn-back inline-block relative"
            disabled={!prevLink}
            onClick={() => navContext.triggerTransition(hash, prevLink)}
          >
            Back
          </button>
        </div>
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:w-8/12 xl:w-9/12 lg:pl-2 relative">
          {renderActive ? (
            <Splide />
          ) : (
            <Panzoom src="https://realestatewidget.000webhostapp.com/files/601.png" />
          )}
        </div>

        <div className="lg:w-4/12 xl:w-3/12 lg:pr-2">
          <div className="flex flex-col lg:h-screen building-widget__holder">
            <div className="building-widget-footer-box w-100 lg:w-4/12 xl:w-3/12 mx-auto">
              <div className="flex md:block justify-between -mb-3">
                <button
                  className="building-widget-form__button building-widget-footer-box__button uppercase"
                  onClick={() => setRenderActive(false)}
                >
                  <svg
                    className="flex-shrink-0 mr-3"
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.8904 21.9576L10.3179 7.78281C11.3817 6.72428 13.2207 5.50721 15.4958 5.12299C17.8289 4.72898 20.6665 5.20202 23.664 7.71527L18.6101 21.9579C18.0545 21.6655 17.4216 21.5 16.75 21.5C16.0787 21.5 15.446 21.6654 14.8904 21.9576ZM14.0349 22.5627L9.27416 7.80451C9.21859 7.63225 9.26045 7.44341 9.38361 7.31078C10.5273 6.07914 12.647 4.58994 15.3292 4.13696C18.0379 3.67951 21.2713 4.28819 24.5793 7.18266C24.7335 7.31761 24.7898 7.53301 24.7212 7.72615L19.4588 22.5568C20.2526 23.2877 20.75 24.3358 20.75 25.5C20.75 27.7092 18.9591 29.5 16.75 29.5C14.5409 29.5 12.75 27.7092 12.75 25.5C12.75 24.3389 13.2447 23.2934 14.0349 22.5627Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>VIEWS</span>
                </button>
                <button
                  className="building-widget-form__button building-widget-footer-box__button uppercase"
                  onClick={() => setRenderActive(true)}
                >
                  <svg
                    className="flex-shrink-0 mr-3"
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.1035 11.1465L23.1035 4.1465C23.0115 4.054 22.8805 4 22.75 4H5.75C5.475 4 5.25 4.2265 5.25 4.5V21.5C5.25 21.6295 5.3035 21.7605 5.3965 21.8535L12.396 28.853C12.4885 28.946 12.6195 29 12.75 29H29.75C30.022 29 30.25 28.7765 30.25 28.5V11.5C30.25 11.3695 30.196 11.2385 30.1035 11.1465ZM12.25 27.293L6.957 22H13.25V21H6.25V5.707L12.25 11.707V27.293ZM6.957 5H22.25V11H23.25V5.707L28.543 11H12.957L6.957 5ZM29.25 27.293L23.25 21.293V11H22.25V21H13.25V22H22.543L28.543 28H13.25V12H29.25V27.293Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>RENDERINGS</span>
                </button>
              </div>
            </div>

            <div className="building-widget-block w-100 mx-auto">
              <div className="hidden lg:block">
                <div className="building-widget__logo text-center pb-5 mx-auto mb-16">
                  <img
                    src="https://res.cloudinary.com/dpwbaabx2/image/upload/v1637841004/euz7n8h5jsg3cd8nh8jc.png"
                    alt="description"
                    loading="lazy"
                    width="193"
                    height="86"
                    onClick={() => redirectToMain(hash)}
                  />
                </div>

                <button
                  className="building-widget__btn-back inline-block relative mb-1"
                  disabled={!prevLink}
                  onClick={() => navContext.triggerTransition(hash, prevLink)}
                >
                  Back
                </button>
              </div>

              <div className="building-widget-block__title uppercase mb-2">
                Penthouse 1
              </div>

              <div className="building-widget-residences-info">
                <dl className="building-widget-residences-info__list uppercase mb-4">
                  <dt>Level</dt>
                  <dd>14th Floor</dd>
                  <dt>Residence Type</dt>
                  <dd>
                    4 Bedrooms <br />4 Bedrooms
                  </dd>
                  <dt>Total Area</dt>
                  <dd>4,073 Sq. Ft.</dd>
                  <dt>A/C Living Area</dt>
                  <dd>2,730 Sq. Ft.</dd>
                  <dt>Terrace</dt>
                  <dd>1,343 Sq. Ft.</dd>
                </dl>

                <a
                  href="#"
                  className="building-widget-residences-info__pdf-link flex items-center uppercase"
                  target="_blank"
                >
                  Download Floorplan
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0315 11.1643C10.355 10.9056 10.8269 10.958 11.0857 11.2815C11.3444 11.6049 11.292 12.0769 10.9685 12.3357L8.4746 14.3308C8.34591 14.4361 8.18159 14.4994 8.00248 14.5L8.00006 14.5L7.99373 14.5C7.81768 14.4985 7.65609 14.4364 7.52884 14.3335L5.03151 12.3357C4.70806 12.0769 4.65562 11.6049 4.91438 11.2815C5.17313 10.958 5.6451 10.9056 5.96855 11.1643L7.25006 12.1896V8.75C7.25006 8.33579 7.58584 8 8.00006 8C8.41427 8 8.75006 8.33579 8.75006 8.75V12.1895L10.0315 11.1643Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 0.25C1.48122 0.25 0.25 1.48122 0.25 3V17C0.25 18.5188 1.48122 19.75 3 19.75H13C14.5188 19.75 15.75 18.5188 15.75 17V6.1979C15.75 5.83178 15.6352 5.47488 15.4217 5.17745L12.4085 0.979549C12.0798 0.521573 11.5506 0.25 10.9868 0.25H3ZM1.75 3C1.75 2.30964 2.30964 1.75 3 1.75H10.25V6.14705C10.25 6.56126 10.5858 6.89705 11 6.89705H14.25V17C14.25 17.6904 13.6904 18.25 13 18.25H3C2.30964 18.25 1.75 17.6904 1.75 17V3Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
