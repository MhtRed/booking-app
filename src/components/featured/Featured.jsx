import "./featured.css";
import React from "react";

export default function featured() {
  return (
    <div className="featured">
      <div className="featudedItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/540x270/579738.webp?k=1bfe325b8ed4316353264edd21a15b96de60a1297aa5166f609bc972707fc183&o="
          alt="CityImage"
        />
        <div className="featuredTitles">
          <h1>Marrakech</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featudedItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/540x270/579738.webp?k=1bfe325b8ed4316353264edd21a15b96de60a1297aa5166f609bc972707fc183&o="
          alt="CityImage"
        />
        <div className="featuredTitles">
          <h1>tangier</h1>
          <h2>34 properties</h2>
        </div>
      </div>
      <div className="featudedItem">
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/540x270/579738.webp?k=1bfe325b8ed4316353264edd21a15b96de60a1297aa5166f609bc972707fc183&o="
          alt="CityImage"
        />
        <div className="featuredTitles">
          <h1>Meknes</h1>
          <h2>99 properties</h2>
        </div>
      </div>
    </div>
  );
}
