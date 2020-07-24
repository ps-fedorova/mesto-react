import React from "react";
import api from '../utils/API';
import edit from "../images/edit.svg";
import plus from "../images/plus.svg";
import Card from './Card';


function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userId, setUserId] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
      .then(([{name, about, avatar, _id}, cards]) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
        setUserId(_id);

        setCards(cards);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__position">

          <button
            className="button profile__avatar-edit"
            type="button"
            onClick={props.onEditAvatar}
            onKeyDown={props.onEditAvatar}>
            <img
              alt="Аватар"
              src={userAvatar}
              className="profile__avatar-image"/>
          </button>

          <div className="profile__user-info">
            <div className="profile__name-edit-position">
              <h1 className="profile__user-info-name">{userName}</h1>
              <button
                className="button profile__button-edit"
                type="button"
                onClick={props.onEditProfile}
                onKeyDown={props.onEditProfile}
              >
                <img
                  alt="Редактировать профиль"
                  className="profile__button-edit-vector"
                  src={edit}/>
              </button>
            </div>
            <p className="profile__user-info-about">{userDescription}</p>
          </div>
        </div>
        <button
          className="button profile__button-add"
          type="button"
          onClick={props.onAddCard}
          onKeyDown={props.onAddCard}
        >
          <img
            alt="Добавить карточку"
            className="profile__button-add-vector"
            src={plus}
          />
        </button>
      </section>

      <ul className="card-container">
        {cards.map(card => {
          return <Card
            key={card._id}
            card={card}
            userId={userId}
            onCardClick={props.onCardClick}
            onDeleteCardClick={props.onDeleteCardClick}
          />
        })}
      </ul>

    </main>
  );
}

export default Main;