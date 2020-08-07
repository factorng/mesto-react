import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import Spinner from './Spinner';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = React.useState('name');
    const [userDescription , setUserDescription] = React.useState('description');
    const [userAvatar, setUserAvatar] = 
        React.useState('');
    const [cards, setCards] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        api.getUserInfo()
            .then((result) => {
                setUserName(result.name);
                setUserDescription(result.about);
                setUserAvatar(result.avatar);
            })
            .catch((error) => {
                console.log(error);
        });
        api.getInitialCards()
            .then((result) => {
                setCards(result);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
        
        }, []);

    return (
        <main>
            <section className="profile">
                <img src={userAvatar} alt="Аватар" className="profile__logo" />
                <div className="profile__avatar-hover" onClick={onEditAvatar}/>
                <div className="profile__info">
                <div className="profile__user">
                    <h3 className="profile__name">{userName}</h3>
                    <p className="profile__occupation">{userDescription}</p>
                </div>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}/>
                </div>
                <button className="profile__add-button" type="button"  onClick={onAddPlace}/>
            </section>
            <section className="places" aria-label="Элементы">
                {isLoading ? (<Spinner/>) : (cards.map(({_id, ...card}) => <Card key={_id} onCardClick={onCardClick}  {...card}/>))}
            </section>
        </main>
    );
}

export default Main;