import React from "react";

function ConfirmDeletePopup({ isOpen, onSubmitClick, onClose, isButtonProgress}) {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmitClick();
    }

    return (
        <div 
        className={
            isOpen ? `popup  confirmation popup_open` : `popup  confirmation`
        }
        >
        <form
            className="popup__form confirmation__form"
            method="post"
            action="#"
            noValidate
            onSubmit={handleSubmit}
        >
            <button
            className="popup__button-close confirmation__button-close"
            type="button"
            aria-label="закрыть"
            onClick={onClose}
            ></button>
            <h3 className="popup__title">Вы уверены?</h3>
            <button className="popup__button-submit" type="submit" aria-label="Да">
                {isButtonProgress ? 'Удаление...' : 'Да'}
            </button>
        </form>
        </div>
    );
}

export default ConfirmDeletePopup;
