import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const Shop = () => {
  const [cartNum, setCartNum] = useOutletContext();

  const clearFilters = () => {};

  return (
    <>
      <h1 className="pageHeader">Products</h1>
      <div className="shopWrapper">
        <div className="shopFilters">
          <div id="filters">
            <h5>Format</h5>
            <select name="format" id="format" className="filterSelect">
              <option value="" className="filterInput">
                All
              </option>
              <option value="CD" className="filterInput">
                CD
              </option>
              <option value="Vinyl" className="filterInput">
                Vinyl
              </option>
            </select>
            <br />
            <h5>Condition</h5>
            <select name="condition" id="condition" className="filterSelect">
              <option value="" className="filterInput">
                All
              </option>
              <option value="Poor" className="filterInput">
                Poor
              </option>
              <option value="Okay" className="filterInput">
                Okay
              </option>
              <option value="Great" className="filterInput">
                Great
              </option>
              <option value="Perfect" className="filterInput">
                Perfect
              </option>
            </select>
            <div
              class="inputLabel"
              style={{
                marginTop: "0px",
                marginBottom: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5 style={{ marginTop: "10px" }}>Category</h5>
              <select name="category" id="category" className="filterSelect">
                <option value="" default className="filterInput">
                  All
                </option>
                <option value="Progressive Rock" className="filterInput">
                  Progressive Rock
                </option>
                <option value="Rock" className="filterInput">
                  Rock
                </option>
                <option value="Psychedelic Rock" className="filterInput">
                  Psychedelic Rock
                </option>
                <option value="Jam Band" className="filterInput">
                  Jam Band
                </option>
                <option value="Funk" className="filterInput">
                  Funk
                </option>
                <option value="Folk Rock" className="filterInput">
                  Folk Rock
                </option>
              </select>
            </div>
            <span className="clickText" onclick={clearFilters}>
              Clear Filters
            </span>
            <div
              class="inputLabel"
              style={{
                marginTop: "0px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5 style={{ marginTop: "10px" }}>Sort By</h5>
              <select name="sort" id="sort" className="filterSelect">
                <option default value="a">
                  A - Z
                </option>
                <option value="z">Z - A</option>
                <option value="l">$ Low - High</option>
                <option value="h">$ High - Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="shopContent" id="shopContent"></div>
      </div>
    </>
  );
};

export default Shop;
