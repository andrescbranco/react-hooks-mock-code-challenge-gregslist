import {React, useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setCards(data)
    })
  },[])

  function onSearch(term) {
    setSearchTerm(term)
  }
  
  const searchedCards = cards.
  filter(
    (card)=> card.description.toLowerCase().includes(searchTerm.toLowerCase()) 
  )

  function onCardDelete(cardId) {
    const filteredCards = cards.
    filter(
      (card)=> card.id != cardId
      )
    setCards(filteredCards)
  }

  return (
    <div className="app">
      <Header onSearch={onSearch} searchTerm={searchTerm}/>
      <ListingsContainer searchedCards={searchedCards} onCardDelete={onCardDelete} />
    </div>
  );
}

export default App;
