import React from "react";
import trash from "../images/trash.svg";

function Card(props) {
  const card = props.card;

  const handleClick = () => {
    props.onCardClick(card);
  };

  return (
    <li className="card">
      <img src={card.link}
           alt={card.name}
           className="card__image"
           onClick={handleClick}
      />

      <button className="button card__button-delete {/*card__button-delete_invisible*/}" type="submit" >
        <img alt="Удалить"
             className="card__button-delete-vector"
             src={trash}
             onClick={props.onDeleteCardClick} />
      </button>
      <div className="card__description">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__likes-container">
          <button className="button card__button-like" type="submit"/>
          <p className="card__count-likes">{card.likes.length}</p>
        </div>
      </div>

    </li>
  );
}

export default Card;