import React, { useState, useEffect } from "react";
import Rating from "./Rating.js";
import { CartState } from "../functionality/Context.js";
import "./Filter.css";
import { RiArrowDropDownLine } from "react-icons/ri";
export const Filter = () => {
  // const [rate, setRating] = useState(0);
  const {
    FilterState: { byRating, sort },
    FilterDispatch,
  } = CartState();

  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };

  return (
    <>
      <div className="filter-container">
        <div className={`dropdown`}>
          <button onClick={handleDropdownClick} className="dropdown-btn">
            Sort by: Featured <RiArrowDropDownLine style={{ fontSize: 20 }} />
          </button>
          <div
            className={`dropdown-items ${
              dropdownState ? "isVisible" : "isHidden"
            }`}
          >
            <div className="dropdown-item">
              <div className="dropdown__link">
                <input
                  onChange={(e) =>
                    FilterDispatch({
                      type: "FILTER_BY_SEARCH",
                      payload: e.target.value,
                    })
                  }
                  type="search"
                  id="default-search"
                  className="filter-search"
                  placeholder="Search Items..."
                  required=""
                />
              </div>
            </div>
            <div onClick={handleDropdownClick}>
              <div className="dropdown-item">
                <div
                  className="dropdown__link"
                  onClick={() =>
                    FilterDispatch({
                      type: "SORT_BY_PRICE",
                      payload: "LowToHigh",
                    })
                  }
                >
                  Low to High
                </div>
              </div>
              <div className="dropdown-item">
                <div
                  className="dropdown__link"
                  onClick={() =>
                    FilterDispatch({
                      type: "SORT_BY_PRICE",
                      payload: "HighToLow",
                    })
                  }
                  checked={sort === "HighToLow" ? true : false}
                >
                  High to Low
                </div>
              </div>
              <div className="dropdown-item">
                <div
                  className="dropdown__link"
                  onClick={() =>
                    FilterDispatch({
                      type: "FILTER_BY_STOCK",
                    })
                  }
                >
                  In stock
                </div>
              </div>
              <div className="dropdown-item">
                <div
                  className="dropdown__link"
                  onClick={() =>
                    FilterDispatch({
                      type: "FILTER_BY_DELIVERY",
                    })
                  }
                >
                  Fast Delivery
                </div>
              </div>
              <div className="dropdown-item">
                <div className="filter-search">
                  <Rating
                    rating={byRating}
                    onClick={(i) =>
                      FilterDispatch({
                        type: "FILTER_BY_RATING",
                        payload: i + 1,
                      })
                    }
                  />
                </div>
              </div>
              <div className="dropdown-item">
                <div
                  className="dropdown__link"
                  onClick={() =>
                    FilterDispatch({
                      type: "CLEAR_FILTER",
                    })
                  }
                >
                  <p className="filter-clear">Clear Filters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
