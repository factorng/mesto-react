import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser, isButtonProgress}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [occupation, setOccupation] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setOccupation(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      occupation,
    });
  }

  function handleClose() {
    onClose();
    setName(currentUser.name);
    setOccupation(currentUser.about);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title="Редактировать профиль"
      buttonText={isButtonProgress ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
        <>
          <div className="popup__input-field">
            <input
              id="input-name"
              className="popup__input edit-profile__input-name"
              type="text"
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Введите имя"
              minLength={2}
              maxLength={40}
              pattern="^[A-Za-zА-ЯЁа-яё -]+$"
              required
            />
            <span id="input-name-error" className="popup__input-error" />
          </div>
          <div className="popup__input-field">
            <input
              id="input-occupation"
              className="popup__input edit-profile__input-occupation"
              type="text"
              value={occupation || ''}
              onChange={(e) => setOccupation(e.target.value)}
              name="occupation"
              placeholder="Род занятий"
              minLength={2}
              maxLength={200}
              required
            />
            <span id="input-occupation-error" className="popup__input-error" />
          </div>
        </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;