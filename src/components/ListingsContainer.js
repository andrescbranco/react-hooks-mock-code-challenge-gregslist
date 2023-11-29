import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchedCards, onCardDelete}) {

  const renderCards = searchedCards.map((card)=>{
    return <ListingCard key={card.id} card={card} onCardDelete={onCardDelete}/>
  })

  return (
    <main>
      <ul className="cards">
        {renderCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
