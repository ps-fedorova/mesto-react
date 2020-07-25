import React from "react";
import ButtonClose from "./ButtonClose";

/*Попап с картинкой*/

function PopupWithImage(props) {

  const {
    card,
    card: {link, name} = {link: '', name: ''},
    onClose,
  } = props;
  //if(!card) return null;

  return (
    <div className={`popup popup__closed popup__zoom-card ${card ? "popup_opened" : ""}`}>
      <div className="popup__zoom">
        <img
          src={`${link}`}
          alt={name}
          className="popup__image"/>
        <ButtonClose closeHandler={onClose}/>
        <h2 className="popup__card-name">{name}</h2>
      </div>
      <div className="popup__overlay" onClick={onClose}/>
    </div>
  )
}

export default PopupWithImage;