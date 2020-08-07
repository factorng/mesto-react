import React from "react";

function Card({ link, name, likes, onCardClick }) {
  function handleClick() {
    onCardClick({link, name});
  }
  return (
    <div className="place">
      <img
        src={link}
        alt={name}
        className="place__image"
        onClick={handleClick}
      />
      <button className="place__button-delete" type="button" />
      <div className="place__description">
        <h3 className="place__title">{name}</h3>
        <div className="place__like">
          <button className="place__button-like" type="button" />
          <p className="place__like-count">{likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
