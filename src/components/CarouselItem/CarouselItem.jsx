import React from "react";
import "../CarouselItem/CarouselItem.css";
import PlayIcon from "../../assets/play-icon.png";
import PlusIcon from "../../assets/plus-icon.png"

const CarouselItem = ({cover, title, year, contentRating, duration}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img"  src={PlayIcon} alt="Play Icon"/>
            <img className="carousel-item__details--img" src={PlusIcon} alt="Plus Icon"/> 
          </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{year} {contentRating} {duration} minutos</p>
        </div>
      </div>
);

export default CarouselItem;