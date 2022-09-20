import "./searchItem.css";
export default function SearchItem() {
  return (
    <div className="searchItem">
      <img
        className="siImg"
        src="https://cf.bstatic.com/xdata/images/hotel/square200/389527313.webp?k=3ef9cf1fe16e967d650149c4f3f7460c98850640261070d818493754e8f3f564&o=&s=1"
        alt=""
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Appartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio appartement with air conditionning
        </span>
        <span className="siFeatures">
          Entire Studio . 1 bathroom . 21m2 1 full bed
        </span>
        <span className="sicancelOp">Free Cancellation</span>
        <span className="sicancelOpSubtitle">
          You can cancel later, so Lock up this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$124</span>
          <span className="siTaxOp">Includes taxes & fees</span>
          <button className="siCheckButton">See Availability  &gt;</button>
        </div>
      </div>
    </div>
  );
}
