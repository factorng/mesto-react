import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard, isButtonProgress}) {
  const [placeName, setPlaceName] = React.useState("");
  const [placeLink, setPlaceLink] = React.useState("");

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddCard({
      placeName,
      placeLink,
    });
    setPlaceLink("");
    setPlaceName("");
  }
  function handleClose() {
    setPlaceLink("");
    setPlaceName("");
    onClose();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      className="add-card"
      formName="add-card__form"
      title="Новое место"
      buttonText={isButtonProgress ? "Сохранение..." : "Создать"}
      onSubmit={handleSubmit}
      onClose={handleClose}
    >
        <div className="popup__input-field">
          <input
            className="popup__input add-card__input-name"
            type="text"
            id="input-place-name"
            name="name"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
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
            onChange={(e) => setPlaceLink(e.target.value)}
            placeholder="Ссылка на картинку"
            required
          />
          <span id="input-place-link-error" className="popup__input-error" />
        </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
