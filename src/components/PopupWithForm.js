import React from 'react';

function PopupWithForm({isOpen, className, formName, Submit, onClose, title,  children, buttonText}) {
    return (
      <div className={(isOpen ? `popup  ${className} popup_open`: `popup  ${className}`)}>
        <form
          className={`popup__form ${formName}`}
          method="post"
          action="#"
          noValidate
          onSubmit={Submit}
        >
          <button
            className="popup__button-close"
            type="button"
            aria-label="закрыть"
            onClick={onClose}
          />
          <h3 className="popup__title">{title}</h3>
          {children}
          <button
            className="popup__button-submit"
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
  
export default PopupWithForm;
