import React from 'react';

function ImagePopup({isOpen, link, name, onClose}) {
  return (
        <div className={(isOpen  ? `popup show-photo popup_open` : `popup show-photo` )}>
            <div className="show-photo__window">
            <button
                className="popup__button-close show-photo__button-close"
                type="button"
                aria-label="закрыть"
                onClick={onClose}
            />
            <img
                src={link.toString()}
                alt={name}
                className="show-photo__image"
            />
            <p className="show-photo__title">{name}</p>
            </div>
        </div>
  );
}

export default ImagePopup;