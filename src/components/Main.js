import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, handleCardClick, handleCardLike, handleCardDelete, cards}) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <img src={currentUser.avatar} alt="Аватар" className="profile__logo" />
                <div className="profile__avatar-hover" onClick={onEditAvatar}/>
                <div className="profile__info">
                <div className="profile__user">
                    <h3 className="profile__name">{currentUser.name}</h3>
                    <p className="profile__occupation">{currentUser.about}</p>
                </div>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}/>
                </div>
                <button className="profile__add-button" type="button"  onClick={onAddPlace}/>
            </section>
            <section className="places" aria-label="Элементы">
                {(cards.map((card, index) => <Card key={index} onCardLike={handleCardLike} onCardDelete={handleCardDelete} card={card} onCardClick={handleCardClick}/>))}
            </section>
        </main>
    );
}

export default Main;