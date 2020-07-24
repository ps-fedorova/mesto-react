import React from "react";
import ButtonClose from "./ButtonClose";

/*Попап с картинкой*/

function PopupWithImage(props) {

  const card = props.card;

  return (
    <div className={`popup popup__closed popup__zoom-card ${props.isOpen  ? "popup_opened" : ""}`}>
      <div className="popup__zoom">
        <img
          //src={`${card.link}`}
          alt={card.name}
          className="popup__image"/>
        <ButtonClose closeHandler={props.onClose}/>
        <h2 className="popup__card-name">{card.name}</h2>
      </div>
      <div className="popup__overlay" onClick={props.onClose}/>
    </div>
  )
}

export default PopupWithImage;