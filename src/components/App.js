import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: "",
    link: "",
  });
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick({ name, link }) {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link,
    });
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: "",
      link: "",
    });
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        className="edit-profile"
        formName="edit-profile__form"
        title="Редактировать профиль"
        buttonText="Сохранить"
        onClose={closeAllPopups}
        children={
          <>
            <div className="popup__input-field">
              <input
                id="input-name"
                className="popup__input edit-profile__input-name"
                type="text"
                name="name"
                defaultValue=""
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
                name="occupation"
                defaultValue=""
                placeholder="Род занятий"
                minLength={2}
                maxLength={200}
                required
              />
              <span
                id="input-occupation-error"
                className="popup__input-error"
              />
            </div>
          </>
        }
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        className="add-card"
        formName="add-card__form"
        title="Новое место"
        buttonText="Создать"
        onClose={closeAllPopups}
        children={
          <>
            <div className="popup__input-field">
              <input
                className="popup__input add-card__input-name"
                type="text"
                id="input-place-name"
                name="name"
                defaultValue=""
                placeholder="Название"
                minLength={2}
                maxLength={30}
                required
              />
              <span
                id="input-place-name-error"
                className="popup__input-error"
              />
            </div>
            <div className="popup__input-field">
              <input
                className="popup__input add-card__input-link"
                type="url"
                id="input-place-link"
                name="link"
                defaultValue=""
                placeholder="Ссылка на картинку"
                required
              />
              <span
                id="input-place-link-error"
                className="popup__input-error"
              />
            </div>
          </>
        }
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        className="change-avatar"
        formName="change-avatar__form"
        title="Обновить аватар"
        buttonText="Сохранить"
        onClose={closeAllPopups}
        children={
          <div className="popup__input-field">
            <input
              className="popup__input change-avatar__input-link"
              type="url"
              id="change-avatar__input-link"
              name="link"
              defaultValue=""
              placeholder="Ссылка на картинку"
              required
            />
            <span id="change-avatar__input-link-error" className="popup__input-error" />
          </div>
        }
      />
      <ImagePopup {...selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
