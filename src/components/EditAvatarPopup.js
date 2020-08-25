import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isButtonProgress }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value
    });
    inputRef.current.value = "";
  }
  function handleClose() {
    inputRef.current.value = "";
    onClose();
  }
  return (
    <PopupWithForm 
      isOpen={isOpen}
      className="change-avatar"
      formName="change-avatar__form"
      title="Обновить аватар"
      buttonText={isButtonProgress ? "Сохранение..." : "Сохранить"}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-field">
        <input
          className="popup__input change-avatar__input-link"
          ref={inputRef}
          type="url"
          id="change-avatar__input-link"
          name="link"
          defaultValue=""
          placeholder="Ссылка на картинку"
          required
        />
        <span
          id="change-avatar__input-link-error"
          className="popup__input-error"
        ></span>
      </div>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
