import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from '../utils/Api';

function EditProfilePopup({isOpen, onClose}) {
  const user = React.useContext(CurrentUserContext).user;
  const setUser = React.useContext(CurrentUserContext).setCurrentUser;
  const [name, setName] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [buttonText, setButtonText ]= React.useState('Сохранить');

  React.useEffect(() => {
    setName(user.name);
    setOccupation(user.about);
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    setButtonText('Сохранение...');
    api.updateUserProfile(name, occupation)
        .then((res) => {
            setUser(res);
            onClose();
            setButtonText('Сохранить');
        })
        .catch(err => console.log(err));
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      Submit={handleSubmit}
      title="Редактировать профиль"
      buttonText={buttonText}
      children={
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
      }
    ></PopupWithForm>
  );
}

export default EditProfilePopup;
