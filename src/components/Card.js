import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const user = React.useContext(CurrentUserContext).user;
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === user._id;
  
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (`place__button-delete ${isOwn ? '' : 'place__button-delete_hidden'}`);
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === user._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (`place__button-like ${isLiked ? 'place__button-like_active' : ''}`);
    
  
  return (
    <div className="place">
      <img
        src={card.link}
        alt={card.name}
        className="place__image"
        onClick={() => onCardClick(card.name, card.link)}
      />
      <button className={cardDeleteButtonClassName} type="button" onClick={()=>onCardDelete(card._id)}/>
      <div className="place__description">
        <h3 className="place__title">{card.name}</h3>
        <div className="place__like">
          <button className={cardLikeButtonClassName} type="button" onClick={()=>onCardLike(card)}/>
          <p className="place__like-count">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
