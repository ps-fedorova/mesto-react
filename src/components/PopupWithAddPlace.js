import PopupWithForm from "./PopupWithForm";
import React from "react";

function PopupWithAddPlace(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');


  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddCardSubmit({
      name: name,
      link: link
    })
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      name="addCard"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      submitName="Создать"
    >
      <label className="popup__form-field">
        <input
          className="popup__input popup__input_new-card"
          id="name-card"
          maxLength="30"
          minLength="2"
          name="title"
          placeholder="Название"
          required
          type="text"
          value={name}
          onChange={handleNameChange}/>
        {/*<span className="popup__error" id="name-card-error"></span>*/}
      </label>
      <label className="popup__form-field">
        <input
          className="popup__input popup__input_new-card-link"
          id="link"
          name="src"
          placeholder="Ссылка на картинку"
          required
          type="url"
          value={link}
          onChange={handleLinkChange}/>
        {/*<span className="popup__error" id="link-error"></span>*/}
      </label>
    </PopupWithForm>
  )
}

export default PopupWithAddPlace