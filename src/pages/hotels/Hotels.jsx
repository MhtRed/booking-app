import "./hotels.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

export default function Hotels() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input
                placeholder="Your destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
              />
            </div>
            <div className="listSearchItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")}`} to{" "}
                {`${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="listSearchOptions">
                <div className="listSearchOptionItem">
                  <span className="listOptionSearchText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="listSearchOptionInput" />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listOptionSearchText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="listSearchOptionInput" />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listOptionSearchText">Adutl</span>
                  <input
                    placeholder={options.adults}
                    min={1}
                    type="number"
                    className="listSearchOptionInput"
                  />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listOptionSearchText">Children</span>
                  <input
                    placeholder={options.children}
                    min={0}
                    type="number"
                    className="listSearchOptionInput"
                  />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listOptionSearchText">Room</span>
                  <input
                    placeholder={options.room}
                    min={1}
                    type="number"
                    className="listSearchOptionInput"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
