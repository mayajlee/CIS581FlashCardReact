import { useState } from 'react'
import './App.css'
import Flashcards from './components/Flashcards'

function App() {

  const cardPairs = [["consequenza", "consequence"],
                        ["aiutare", "to help"],
                        ["l'aeroporto", "the airport"],
                        ["adesso", "now"],
                        ["la stazione", "the station"],
                        ["forte", "strong/forceful"],
                        ["la prenotazione", "reservation"],
                        ["bene", "well"],
                        ["Signora", "MS."],
                        ["il portafoglio", "wallet"],
                        ["grazie", "thank you"]]
  return (
    <>
      <div style={{backgroundColor: " #ebf5fb ", borderRadius: "16px", padding: "20px"}}>
        <h2>Italian Vocabulary!</h2>
        <h3>Concept Flashcards</h3>

        <Flashcards cards={cardPairs}/>
      </div>
    </>
  )
}

export default App
