import React, {useEffect, useContext} from 'react';
import {AppContext} from '../App';

const Letter = ({attemptVal,letterPos}) => {
    const {board, setDisabledLetters, currAttempt, correctWord} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = (currAttempt.attempt > attemptVal) &&
                    (correct ? "correct": almost ? "almost" : "error");

    useEffect(()=>{
        if (letter !== "" && !correct && !almost){
            console.log(letter);
            setDisabledLetters((prev)=> [...prev, letter]);
        }
    },[currAttempt.attempt])                

    
    return (
        <div className='letter' id={letterState ? letterState : ""}>
            {letter}   
        </div>
  );
}

export default Letter
