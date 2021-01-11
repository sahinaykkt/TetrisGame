import "./reset.css";
import "./style.css";
import {lTetromino} from "./constants/tetrominoes";
import {elements} from "./functions/grid";
import {setValue} from "./currentValues";
import {start, bindEvents} from "./functions/tetrimones";

const gridItems = elements;

setValue("elements", gridItems);

//const username = prompt("Your name ?");

//setValue("user", username);
//document.querySelector("#user").innerHTML = `Welcome, ${username}`;


if(window.localStorage.getItem("highestScore")){
    document.querySelector("#highest-score").innerHTML = window.localStorage.getItem("highestScore");
}else{
    document.querySelector("#highest-score").innerHTML = 0;
}


document.querySelector("#start-button").addEventListener("click", () => {
    const startTetrisInterval = () => {
        start();
    };
    const timer = setInterval(startTetrisInterval, 800);
    setValue("timer", timer);
    bindEvents();

});