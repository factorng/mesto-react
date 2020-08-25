import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import Spinner from "./Spinner";
import api from "../utils/Api";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonProgress, setIsButtonProgress] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState('');
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: "",
    link: "",
  });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCards(cards);
        setCurrentUser(userData);
      })
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      // Обновляем стейт
      setCards(newCards);
    });
  }
 
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
    setIsConfirmDeletePopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: "",
      link: "",
    });
  }
  function handleAddPlaceSubmit({placeName, placeLink}) {
    setIsButtonProgress(true)
    api
      .addNewCard(placeName, placeLink)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => setIsAddPlacePopupOpen(false))
      .catch((err) => console.log(err))
      .finally(()=>setIsButtonProgress(false));
  }

  function handleUpdateUser({ name, occupation }) {
    setIsButtonProgress(true)
    api
      .updateUserProfile(name, occupation)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => setIsEditProfilePopupOpen(false))
      .catch((err) => console.log(err))
      .finally(()=>setIsButtonProgress(false));
  }

  function handleUpdateAvatar({avatar}) {
    setIsButtonProgress(true)
    api
      .setUserAvatar(avatar)
      .then((res) => {
        setCurrentUser({ ...currentUser, avatar: res.avatar });
        closeAllPopups();
      })
      .then(() => setIsEditAvatarPopupOpen(false))
      .catch(err => console.log(err))
      .finally(()=>setIsButtonProgress(false));
  }
  function handleCardDelete(cardDelete) {
    setIsConfirmDeletePopupOpen(true);
    setCardToDelete(cardDelete);
  }

  function handleCofirmDelete(cardDelete = cardToDelete) {
    setIsButtonProgress(true)
    api
      .deleteCard(cardDelete._id)
      .then(() => {
        const newCards = cards.filter((card) => card._id !== cardDelete._id);
        setCards(newCards);
      })
      .then(() =>  setIsConfirmDeletePopupOpen(false))
      .catch((err) => console.log(err))
      .finally(()=>setIsButtonProgress(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      {isLoading ? <Spinner/> : 
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        handleCardClick={handleCardClick}
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        cards={cards}
      />
      }
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        isButtonProgress={isButtonProgress}
      />
      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups} 
        onAddCard={handleAddPlaceSubmit}
        isButtonProgress={isButtonProgress}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        isButtonProgress={isButtonProgress}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <ImagePopup {...selectedCard} onClose={closeAllPopups}/>
      <ConfirmDeletePopup isOpen={isConfirmDeletePopupOpen} onClose={closeAllPopups} onSubmitClick={handleCofirmDelete} isButtonProgress={isButtonProgress}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
