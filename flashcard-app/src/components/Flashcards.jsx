import { useState } from "react"
import "./Flashcards.css"
function Flashcards({cards}){
    const [curIndex, setIndex] = useState(0)
    const bttnStyle = {backgroundColor:  "#1d4feb", margin: "10px", color: "white"}

    function nextCard(){
        setIndex(Math.floor(Math.random() * cards.length));
    }

    return(
        <>
            <div style={{boxShadow: "10px 10px 10px 10px #cacfd2 ", borderRadius: "8px", padding: "20px", backgroundColor: " #f7f9f9 "}}>
                <h4>Common/Survival vocabulary</h4>
                <h4>The most common phrases I'll need for my grad trip to Italy!</h4>
                <p>Total cards: {cards.length}</p>

                {/*FlipCard CSS + HTML Source: W3 Schools*/}
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1>{cards[curIndex][0]}</h1>
                        </div>
                        <div class="flip-card-back">
                            <h1>{cards[curIndex][1]}</h1>
                        </div>
                    </div>
                </div>

                <button style={bttnStyle} onClick={nextCard}>next</button>
            </div>
        </>
    )
}

export default Flashcards