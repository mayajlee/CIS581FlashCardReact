import { useState } from "react"
import "./Flashcards.css"
function Flashcards({cards}){
    const [curIndex, setIndex] = useState(0);
    const [guess, setGuess] = useState('');

    const bttnStyle = {backgroundColor:  "#1d4feb", margin: "10px", color: "white"}

    const handleGuess = (event) => {
        setGuess(event.target.value);
    }
    function resetBox(){
        setGuess('');
        document.getElementById("userBox").style.backgroundColor = "#ffffff";
    }

    function checkAnswer(){
        if(guess == cards[curIndex][1]){
            document.getElementById("userBox").style.backgroundColor = "#85e396";
            input.style.backgroundColor = "#85e396";
        }
        else{
            document.getElementById("userBox").style.backgroundColor = "#f55e5e";
            input.style.backgroundColor = "#f55e5e";
        }
    }
    
    function nextCard(){
        if(curIndex < cards.length -1){
            setIndex(curIndex + 1);
        }
        resetBox();
    }
    function prevCard(){
        if(curIndex > 0){
            setIndex(curIndex - 1);
        }
        resetBox();
        
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

                {/*Guess Area*/}
                <div style={{border: "2px solid #1f52f3", padding: "20px", borderRadius: "20px"}}>
                    <h3>Answer:</h3>
                    <input type="text" name="" id="userBox" value = {guess} style={{padding: "5px", borderRadius: "5px"}} onChange={handleGuess}/>
                    <button type="" style={bttnStyle} onClick={checkAnswer}>Check!</button>
                </div>

                <button style={bttnStyle} onClick={prevCard}>prev</button>
                <button style={bttnStyle} onClick={nextCard}>next</button>

                
            </div>
        </>
    )
}

export default Flashcards