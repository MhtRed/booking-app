import "./hotel.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      id: 1,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389527313.jpg?k=77d019dc9f79df91eba3f4314174dd608be1d43926b62f33bfdbd3dea27b3120&o=&hp=1",
    },
    {
      id: 2,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389518624.jpg?k=568fc61a5628d21ecaea3ba9e336d1736d61ec7d45121d17b696da0e08e96610&o=&hp=1",
    },
    {
      id: 3,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389518712.jpg?k=b87508271e8875a87d978642d7fe15bcf6c4898a6dd582df156c4e82384acf98&o=&hp=1",
    },
    {
      id: 4,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389519228.jpg?k=0ac6b6fff99c29b31ebd781e1d411f9cee298ba362ba5742b1237d2790bfd388&o=&hp=1",
    },
    {
      id: 5,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389527313.jpg?k=77d019dc9f79df91eba3f4314174dd608be1d43926b62f33bfdbd3dea27b3120&o=&hp=1",
    },
    {
      id: 6,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389518624.jpg?k=568fc61a5628d21ecaea3ba9e336d1736d61ec7d45121d17b696da0e08e96610&o=&hp=1",
    },
    {
      id: 7,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389518712.jpg?k=b87508271e8875a87d978642d7fe15bcf6c4898a6dd582df156c4e82384acf98&o=&hp=1",
    },
    {
      id: 8,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389519228.jpg?k=0ac6b6fff99c29b31ebd781e1d411f9cee298ba362ba5742b1237d2790bfd388&o=&hp=1",
    },
    {
      id: 9,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389519228.jpg?k=0ac6b6fff99c29b31ebd781e1d411f9cee298ba362ba5742b1237d2790bfd388&o=&hp=1",
    },
  ];
  const openHandler = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };
  const slidehandler = (direction) => {
    if (direction === "l") {
      setSlideNumber((prev) => {
        return prev === 0 ? photos.length - 1 : prev - 1;
      });
    } else {
      setSlideNumber((prev) => {
        return prev === photos.length - 1 ? 0 : prev + 1;
      });
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              onClick={() => setOpen(false)}
              icon={faCircleXmark}
              className="close"
            />
            <FontAwesomeIcon
              onClick={() => slidehandler("l")}
              icon={faCircleArrowLeft}
              className="arrow"
            />
            <div className="sliderWrapper">
              <img
                className="sliderImg"
                src={photos[slideNumber].src}
                alt=""
              ></img>
            </div>
            <FontAwesomeIcon
              onClick={() => slidehandler("r")}
              icon={faCircleArrowRight}
              className="arrow"
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow"> Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon
              className="hotelAddressIcon"
              icon={faLocationDot}
            />
            <span>5 Elton Street, 125 NY</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div key={photo.id} className="hotelImgWrapper">
                <img
                  onClick={() => openHandler(index)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Marrakesh</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at Riad Mounir! To save at
                this property, all you have to do is sign in. Riad Mounir is set
                in Marrakech, 801 m from Medersa Ben Youssef and 901 m from
                Marrakech Museum. Guests can enjoy the on-site restaurant. Rooms
                have a private bathroom fitted with a shower. For your comfort,
                you will find free toiletries and a hair dryer. Riad Mounir
                features free WiFi. There is a 24-hour front desk at the
                property. Majorelle Gardens is 0.7 mi from Riad Mounir, while
                Souk of the Medina is 0.7 mi away. The nearest airport is
                Marrakech-Menara Airport, 3.1 mi from Riad Mounir. This is our
                guests' favorite part of Marrakesh, according to independent
                reviews.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1 className="">Perfect for a 9-night stay!</h1>
              <span>
                Located in the heart of Marrakech, this property has a excellent
                location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
