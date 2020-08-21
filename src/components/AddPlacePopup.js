import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function AddPlacePopup({ isOpen, onClose }) {
  const [placeName, setPlaceName] = React.useState('');
  const [placeLink, setPlaceLink] = React.useState(''); 
  const cards = React.useContext(CurrentUserContext).cards;
  const setCards = React.useContext(CurrentUserContext).setCards;
  const [buttonText, setButtonText ]= React.useState('Создать');
  
  function handleSubmit(e) {
      e.preventDefault();
      setButtonText('Сохранение...');
      api.addNewCard(placeName, placeLink)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          setButtonText('Создать');
        })
        .catch(err => console.log(err));
      setPlaceLink('');
      setPlaceName('');
      onClose();
      
  }
    
  return (
    <PopupWithForm
      isOpen={isOpen}
      className="add-card"
      formName="add-card__form"
      title="Новое место"
      buttonText={buttonText}
      Submit={handleSubmit}
      onClose={onClose}
      children={
        <>
          <div className="popup__input-field">
            <input
              className="popup__input add-card__input-name"
              type="text"
              id="input-place-name"
              name="name"
              value={placeName}
              onChange={(e)=>setPlaceName(e.target.value)}
              placeholder="Название"
              minLength={2}
              maxLength={30}
              required
            />
            <span id="input-place-name-error" className="popup__input-error" />
          </div>
          <div className="popup__input-field">
            <input
              className="popup__input add-card__input-link"
              type="url"
              id="input-place-link"
              name="link"
              value={placeLink}
              onChange={(e)=>setPlaceLink(e.target.value)}
              placeholder="Ссылка на картинку"
              required
            />
            <span id="input-place-link-error" className="popup__input-error" />
          </div>
        </>
      }
    />
  );
}

export default AddPlacePopup;
