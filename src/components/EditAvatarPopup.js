import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from '../utils/Api';

function EditAvatarPopup({isOpen, onClose}) {
    const setUser = React.useContext(CurrentUserContext).setCurrentUser;
    const inputRef = React.useRef();
    const [buttonText, setButtonText ]= React.useState('Сохранить');
    
    function handleSubmit(e) {
        e.preventDefault();
        setButtonText('Сохранение...');
        api.setUserAvatar(inputRef.current.value)
        .then((user) => {
            setUser(user)
            onClose();
            inputRef.current.value = '';
            setButtonText('Сохранить');
        })
        .catch(err => console.log(err));
    }

    return (
        <PopupWithForm
        isOpen={isOpen}
        className="change-avatar"
        formName="change-avatar__form"
        title="Обновить аватар"
        buttonText={buttonText}
        onClose={onClose}
        Submit={handleSubmit}
        children={
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
            <span id="change-avatar__input-link-error" className="popup__input-error" />
          </div>
        }
      />
    )
}
export default EditAvatarPopup