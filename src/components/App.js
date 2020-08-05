import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from "./PopupWithImage";

import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from "../utils/API";
import PopupWithConfirm from "./PopupWithConfirm";

function App() {
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [dataImage, setDataImage] = React.useState({
    link: '',
    name: ''
  });
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cardDelete, setCardDelete] = React.useState({});



  React.useEffect(() => {
    Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
      .then(([initialUserInfo, initialCards]) => {
        setCurrentUser(initialUserInfo);
        setCards(initialCards);
      })
      .catch(err => console.log(err));
  }, []);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleDeleteCardClick(card) {
    setCardDelete(card);
    setIsConfirmPopupOpen(true);
  }

  function handleCardZoom(props) {
    setSelectedCard(true);
    setDataImage({link: props.link, name: props.name});
  }


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(false);
  }

  React.useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups()
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  function handleCardDelete() {
    api.deleteCard(cardDelete._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== cardDelete._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header/>
      <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddCardClick}
            onCardZoom={handleCardZoom}
            onCardDelete={handleDeleteCardClick}
            onCardLike={handleCardLike}
            cards={cards}
      />
      <Footer/>

      {/*/!*Обновить аватар*!/*/}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        submitName="Сохранить"
      >
        <label className="popup__form-field">
          <input className="popup__input popup__input_avatar-link"
                 id="link-avatar"
                 name="avatar"
                 placeholder="Ссылка на картинку"
                 required
                 type="url"
          />
          {/*<span className="popup__error" id="link-avatar-error"/>*/}
        </label>

      </PopupWithForm>

      {/*  /!*Редактировать профиль*!/*/}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        submitName="Сохранить"
      >

        <label className="popup__form-field">
          <input className="popup__input popup__input_user-name"
                 id="name"
                 maxLength="40"
                 name="name"
                 pattern="[A-Za-zА-Яа-яЁё]*[A-Za-zА-Яа-яЁё]+[A-Za-zА-Яа-яЁё\s\-]*[A-Za-zА-Яа-яЁё]+[A-Za-zА-Яа-яЁё\s]*"
                 placeholder="Имя"
                 type="text"
                 required
          />
          {/*<span className="popup__error" id="name-error"/>*/}
        </label>
        <label className="popup__form-field">
          <input className="popup__input popup__input_user-about"
                 id="about"
                 maxLength="200"
                 minLength="2"
                 name="about"
                 placeholder="О себе"
                 type="text"
                 required
          />
          {/*<span className="popup__error" id="about-error"/>*/}
        </label>
      </PopupWithForm>

      {/*/!*Добавить карточку*!/*/}
      <PopupWithForm
        name="addCard"
        title="Новое место"
        isOpen={isAddCardPopupOpen}
        onClose={closeAllPopups}
        submitName="Создать"
      >
        <label className="popup__form-field">
          <input className="popup__input popup__input_new-card"
                 id="name-card"
                 maxLength="30"
                 minLength="2"
                 name="title"
                 placeholder="Название" required type="text"/>
          {/*<span className="popup__error" id="name-card-error"></span>*/}
        </label>
        <label className="popup__form-field">
          <input className="popup__input popup__input_new-card-link"
                 id="link"
                 name="src"
                 placeholder="Ссылка на картинку"
                 required type="url"/>
          {/*<span className="popup__error" id="link-error"></span>*/}
        </label>

      </PopupWithForm>

      <PopupWithConfirm
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        onCardDelete={handleCardDelete}
      />

      <PopupWithImage
        isOpen={selectedCard}
        onClose={closeAllPopups}
        image={dataImage}
      />

    </CurrentUserContext.Provider>
  );
}

export default App;