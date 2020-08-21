import React, {useState} from 'react';
import Card from './Card';
import api from '../utils/Api';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const user = React.useContext(CurrentUserContext).user;
    const cards = React.useContext(CurrentUserContext).cards;
    const setCards = React.useContext(CurrentUserContext).setCards;
    const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = useState(false);
    const [cardToDeleteId, setCardToDeleteId] = useState('');

    function openConfirmDeletePopup() {
        setConfirmDeletePopupOpen(true);
    }
    function closeConfirmDeletePopup() {
        setConfirmDeletePopupOpen(false);
    }
    function onConfirmClick() {
        api.deleteCard(cardToDeleteId)
            .then(()=> {
                const newCards = cards.filter((card) => card._id !== cardToDeleteId);
                setCards(newCards);
            })
            .catch(err => console.log(err));
        closeConfirmDeletePopup();
    }
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === user._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          // Обновляем стейт
          setCards(newCards);
        })
        .catch(err => console.log(err));
    }
    
    function handleCardDelete(cardId) {
        openConfirmDeletePopup();
        setCardToDeleteId(cardId);    
    }

    return (
        <main>
            <section className="profile">
                <img src={user.avatar} alt="Аватар" className="profile__logo" />
                <div className="profile__avatar-hover" onClick={onEditAvatar}/>
                <div className="profile__info">
                <div className="profile__user">
                    <h3 className="profile__name">{user.name}</h3>
                    <p className="profile__occupation">{user.about}</p>
                </div>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}/>
                </div>
                <button className="profile__add-button" type="button"  onClick={onAddPlace}/>
            </section>
            <section className="places" aria-label="Элементы">
                {(cards.map((card) => <Card key={card._id} onCardClick={onCardClick}  onCardLike={handleCardLike} onCardDelete={handleCardDelete} card={card}/>))}
            </section>
            <ConfirmDeletePopup isOpen={isConfirmDeletePopupOpen} onClose={closeConfirmDeletePopup}
             title="Вы уверены?" className="confirmation" formName="confirmation__form" onSubmitClick={onConfirmClick}/>
        </main>
    );
}

export default Main;