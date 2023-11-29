import React, { useEffect, useState } from "react";

function ListingCard({card, onCardDelete}) {

  const [favorite, setFavorite] = useState(true)
  

  function handleFavorite(){
    setFavorite(!favorite)
  }

  function handleDelete(){
    fetch('http://localhost:6001/listings/' + card.id, {
      method : "DELETE"
    })

    onCardDelete(card.id)

  }
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
