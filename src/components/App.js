import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithImage from "./PopupWithImage";
import PopupWithConfirm from "./PopupWithConfirm";
import PopupWithEditProfile from "./PopupWithEditProfile";
import PopupWithEditAvatar from "./PopupWithEditAvatar";
import PopupWithAddPlace from "./PopupWithAddPlace";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from "../utils/API";


function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    avatar: '',
    about: '',
    _id: '',
  });
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

  function handleUpdateUser({name, about}) {
    return api.editUserInfo({name, about})
      .then(user => {
        setCurrentUser(user);
        closeAllPopups();
      });
  }

  function handleUpdateAvatar({avatar}) {
    return api.editUserAvatar({avatar})
      .then(user => {
        setCurrentUser(user);
        closeAllPopups();
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
        onCardZoom={handleCardZoom}
        onCardDelete={handleDeleteCardClick}
        onCardLike={handleCardLike}
        cards={cards}
      />
      <Footer/>

      <PopupWithEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <PopupWithEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <PopupWithAddPlace
        isOpen={isAddCardPopupOpen}
        onClose={closeAllPopups}
      />

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