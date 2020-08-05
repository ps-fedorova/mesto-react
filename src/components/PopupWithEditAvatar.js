import PopupWithForm from "./PopupWithForm";
import React from "react";

function PopupWithEditAvatar(props) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      submitName="Сохранить"
    >
      <label className="popup__form-field">
        <input
          className="popup__input popup__input_avatar-link"
          id="link-avatar"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
          type="url"
        />
        {/*<span className="popup__error" id="link-avatar-error"/>*/}
      </label>

    </PopupWithForm>
  )
}

export default PopupWithEditAvatar