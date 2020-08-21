import React from "react";

function ConfirmDeletePopup({isOpen, className, formName, onSubmitClick, onClose, title,}) {

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitClick();
  }

  return (
    <div
      className={isOpen ? `popup  ${className} popup_open` : `popup  ${className}`}
    >
      <form
        className={`popup__form ${formName}`}
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
        <h3 className="popup__title">{title}</h3>
        <button className="popup__button-submit" type="submit" aria-label="Да">
          Да
        </button>
      </form>
    </div>
  );
}

export default ConfirmDeletePopup;
