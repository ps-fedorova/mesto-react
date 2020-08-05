import PopupWithForm from "./PopupWithForm";
import React from "react";
// import {CurrentUserContext} from "../contexts/CurrentUserContext";


function PopupWithEditProfile(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="profile"
      title="Редактировать профиль"
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
  )
}

export default PopupWithEditProfile