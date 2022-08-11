import React from "react";
import Rating from "./Rating.js";
import { CartState } from "../functionality/Context.js";

export const Filter = () => {
  // const [rate, setRating] = useState(0);
  const {
    FilterState: { byRating, sort },
    FilterDispatch,
  } = CartState();

  return (
    <div className="filters">
      <div
        id="dropdownRadioBgHover"
        className="z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
        data-popper-reference-hidden=""
        data-popper-escaped=""
        data-popper-placement="bottom"
        style={{
          Position: "absolute",
          margin: "0px",
        }}
      >
        <ul
          className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownRadioBgHoverButton"
        >
          <li>
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={(e) =>
                    FilterDispatch({
                      type: "FILTER_BY_SEARCH",
                      payload: e.target.value,
                    })
                  }
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required=""
                />
              </div>
            </form>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <button
                className="cursor-pointer ml-2 w-full text-sm font-medium text-gray-900  dark:text-gray-300 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                label="Price high to low"
                name="group1"
                type="radio"
                id={`inline-2`}
                onClick={() =>
                  FilterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "LowToHigh",
                  })
                }
              >       
              Low to High
              </button>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <button
                className="cursor-pointer ml-2 w-full text-sm font-medium text-gray-900  dark:text-gray-300 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                label="Price high to low"
                name="group1"
                type="radio"
                id={`inline-2`}
                onClick={() =>
                  FilterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "HighToLow",
                  })
                }
                checked={sort === "HighToLow" ? true : false}
              >       
              High to Low
              </button>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                label="Price high to low"
                name="group1"
                type="radio"
                id={`inline-2`}
                onChange={() =>
                  FilterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "LowToHigh",
                  })
                }
                checked={sort === "lowToHigh" ? true : false}
              />
              <label
                htmlFor="default-radio-6"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
              Low to High
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                label="Price high to low"
                name="group1"
                type="radio"
                id={`inline-2`}
                onChange={() =>
                  FilterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "HighToLow",
                  })
                }
                checked={sort === "HighToLow" ? true : false}
              />
              <label
                htmlFor="default-radio-6"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                High to Low
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                value=""
                className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                label="Remove Out Stock"
                name="group1"
                type="checkbox"
                id={`inline-3`}
                onChange={() =>
                  FilterDispatch({
                    type: "FILTER_BY_STOCK",
                  })
                }
              />
              <label
                htmlFor="checkbox-item-4"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                In Stock
              </label>
            </div>
          </li>
          <li>
            <div className="cursor-pointer flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                label="Fast Delivery"
                name="group1"
                type="checkbox"
                id={`inline-4`}
                onChange={() =>
                  FilterDispatch({
                    type: "FILTER_BY_DELIVERY",
                  })
                }
              />
              <label
                htmlFor="checkbox-item-6"
                className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Fast Delivery
              </label>
            </div>
          </li>
          <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <label className="text-sm px-2">Rating</label>
            {/* <Rating
            rating={rate}
            onClick={(i) => setRating(i + 1)}
            style={{ cursor: "pointer" }}
          /> */}
            <Rating
              rating={byRating}
              onClick={(i) =>
                FilterDispatch({
                  type: "FILTER_BY_RATING",
                  payload: i + 1,
                })
              }
              style={{ cursor: "pointer" }}
            />
            </div>
          </li>
          <li>
          <div className="flex justify-center content-center items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <button
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() =>
                FilterDispatch({
                  type: "CLEAR_FILTER",
                })
              }
            >
              Clear Filters
            </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
