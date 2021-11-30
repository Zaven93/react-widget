import { useContext, useState } from "react";

import { NavContext } from "../../context/navContext";
import { roomTestId } from "../../tests/constants";

import Panzoom from "../../components/Panzoom";
import Splide from "../../components/Splide";

const Room = ({ hash, prevLink, nextLink }) => {
  const [renderActive, setRenderActive] = useState(false);
  const navContext = useContext(NavContext);

  return (
    <div
      className="building-widget__container relative"
      data-testid={roomTestId}
    >
      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:w-8/12 xl:w-9/12 lg:pl-2 relative">
          {renderActive ? (
            <Splide />
          ) : (
            <Panzoom src="https://fancyapps.com/img/floor_plan.jpg" />
          )}
        </div>

        <div className="lg:w-4/12 xl:w-3/12 lg:pr-2">
          <div className="flex flex-col lg:flex-col-reverse h-100 justify-between">
            <div className="building-widget-footer-box w-100 mx-auto">
              <div className="-mb-3">
                <button
                  className={`building-widget-form__button building-widget-footer-box__button uppercase ${
                    !renderActive && "active"
                  }`}
                  onClick={() => setRenderActive(false)}
                >
                  <svg
                    className="flex-shrink-0 mr-3"
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
                  <span>VIEWS</span>
                </button>
                <button
                  className={`building-widget-form__button building-widget-footer-box__button uppercase ${
                    renderActive && "active"
                  }`}
                  onClick={() => setRenderActive(true)}
                >
                  <svg
                    className="flex-shrink-0 mr-3"
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
                  <span>RENDERINGS</span>
                </button>
              </div>
            </div>

            <div className="building-widget-block w-100 mx-auto">
              <div className="building-widget__logo text-center pb-5 mx-auto mb-16">
                <img
                  src="https://res.cloudinary.com/dpwbaabx2/image/upload/v1637841004/euz7n8h5jsg3cd8nh8jc.png"
                  alt="description"
                  loading="lazy"
                  width="193"
                  height="86"
                />
              </div>

              <button
                className="building-widget__btn-back inline-block relative mb-1"
                disabled={!prevLink}
                onClick={() => navContext.triggerTransition(hash, prevLink)}
              >
                Back
              </button>

              <div className="building-widget-block__title uppercase mb-4">
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

      <div className="navigation-button-container">
        <button
          disabled={!prevLink}
          onClick={() => navContext.triggerTransition(hash, prevLink)}
        >
          Prev
        </button>
        <button
          disabled={!nextLink}
          onClick={() => navContext.triggerTransition(hash, nextLink)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Room;
