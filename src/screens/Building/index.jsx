import { useContext } from "react";

import { NavContext } from "../../context/navContext";
import { buildingTestId } from "../../tests/constants";

const Building = ({ nextLink, prevLink, hash }) => {
  const navContext = useContext(NavContext);

  return (
    <div className="building-widget__container relative" data-testid={buildingTestId}>
      <div className="lg:flex lg:flex-row-reverse">

        <div className="lg:w-8/12 xl:w-9/12 lg:pl-2">
          <img src="https://via.placeholder.com/1436x1080" alt="description" loading="lazy" width="1436" height="1080" />
        </div>

        <div className="lg:w-4/12 xl:w-3/12 lg:pr-2">
          <div className="building-widget-block mx-auto">

            <div className="building-widget__logo text-center pb-5 mx-auto mb-16">
              <img src="https://via.placeholder.com/193x86" alt="description" loading="lazy" width="193" height="86" />
            </div>

            <form className="building-widget-form" action="#">
              <fieldset>

                <legend className="visually-hidden">
                  Floor filter form
                </legend>

                <div className="building-widget-block__title mb-4">
                  Select a floor
                </div>

                <details className="building-widget-open-close">
                  <summary className="building-widget-open-close__opener">
                    Filter by unit type
                  </summary>
                  <div className="building-widget-open-close__slide pt-4">
                    <div className="-mb-4">
                      <div className="mb-4">
                        <button className="building-widget-form__button" type="reset">
                          Reset
                        </button>
                      </div>

                      <div className="mb-4">
                        <div className="mb-2">
                          Bedrooms
                        </div>
                        <div className="flex flex-wrap -mr-3 -mb-3">
                          <div className="building-widget-form__custom-input mr-3 mb-3">
                            <input type="checkbox" name="building-widget-form__bedrooms" value="4" id="building-widget-form__bedrooms-01" />
                            <label className="building-widget-form__custom-label" htmlFor="building-widget-form__bedrooms-01">
                              4
                            </label>
                          </div>
                          <div className="building-widget-form__custom-input mr-3 mb-3">
                            <input type="checkbox" name="building-widget-form__bedrooms" value="3" id="building-widget-form__bedrooms-02" />
                            <label className="building-widget-form__custom-label" htmlFor="building-widget-form__bedrooms-02">
                              3
                            </label>
                          </div>
                          <div className="building-widget-form__custom-input mr-3 mb-3">
                            <input type="checkbox" name="building-widget-form__bedrooms" value="2" id="building-widget-form__bedrooms-03" />
                            <label className="building-widget-form__custom-label" htmlFor="building-widget-form__bedrooms-03">
                              2
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="mb-2">
                          Bathrooms
                        </div>
                        <div className="flex flex-wrap -mr-3 -mb-3">
                          <div className="building-widget-form__custom-input mr-3 mb-3">
                            <input type="checkbox" name="building-widget-form__bathrooms" value="4" id="building-widget-form__bathrooms-01" />
                            <label className="building-widget-form__custom-label" htmlFor="building-widget-form__bathrooms-01">
                              4
                            </label>
                          </div>
                          <div className="building-widget-form__custom-input mr-3 mb-3">
                            <input type="checkbox" name="building-widget-form__bathrooms" value="3" id="building-widget-form__bathrooms-02" />
                            <label className="building-widget-form__custom-label" htmlFor="building-widget-form__bathrooms-02">
                              3
                            </label>
                          </div>
                          <div className="building-widget-form__custom-input mr-3 mb-3">
                            <input type="checkbox" name="building-widget-form__bathrooms" value="3.5" id="building-widget-form__bathrooms-03" />
                            <label className="building-widget-form__custom-label" htmlFor="building-widget-form__bathrooms-03">
                              3.5
                            </label>
                          </div>
                          <div className="building-widget-form__custom-input mr-3 mb-3">
                            <input type="checkbox" name="building-widget-form__bathrooms" value="2" id="building-widget-form__bathrooms-04" />
                            <label className="building-widget-form__custom-label" htmlFor="building-widget-form__bathrooms-04">
                              2
                            </label>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </details>

              </fieldset>
            </form>

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

export default Building;
