import React from "react";
import ButtonClose from './ButtonClose';

function PopupWithForm(props) {

  function handleClick(evt) {
    evt.preventDefault();
    console.log('Упс...! Пожалуйста, просто закройте попап. Он временно не работает');
  }
  return (
    <div className={`popup popup__closed popup__${props.name} ${(props.isOpen) ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <ButtonClose closeHandler={props.onClose}/>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form popup__form-avatar" name={props.name} noValidate>
          {props.children} {/*Здесь вставка из App.js*/}
          <button type="submit" className="button popup__button" onClick={handleClick}>{props.submitName} </button>
        </form>
      </div>
      <div className="popup__overlay" onClick={props.onClose}/>
    </div>
  );
}

export default PopupWithForm;
