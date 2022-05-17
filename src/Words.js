import wordBank from './wordle-bank.txt';

export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],

];

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch (wordBank)
    .then ((response)=> response.text())
    .then((result)=>{
      
        const wordArr =  result.split("\n");
        const length = wordArr.length;

        for (var i=0; i< length; i++){
            wordArr[i] = wordArr[i].trim();
        }
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
       

    });
    return {wordSet, todaysWord};

};