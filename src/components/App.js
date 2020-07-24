import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from "./PopupWithImage";


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  /*
   function handleEditAvatarClick() {
     document.querySelector('.popup__edit-avatar').classList.toggle('popup_opened');
   }
   function handleEditProfileClick() {
     document.querySelector('.popup__edit-profile').classList.toggle('popup_opened');
   }
   function handleAddPlaceClick() {
     document.querySelector('.popup__add-card').classList.toggle('popup_opened');
   }*/

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleDeleteCardClick() {
    setIsConfirmPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard('');
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

  return (
    <>
      <Header/>
      <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddCardClick}
            onCardClick={handleCardClick}
            onDeleteCardClick={handleDeleteCardClick}/>
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

      {/*/!*Попап "Вы уверены?"*!/*/}
      <PopupWithForm
        name="areYouSure"
        title="Вы уверены?"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        submitName="Да"
      >
      </PopupWithForm>

      <PopupWithImage
        card={selectedCard}
        isOpen={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;