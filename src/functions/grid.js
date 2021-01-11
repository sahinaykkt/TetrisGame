import {GRID_SIZE, GRID_WIDTH} from "../constants/grid";

const $tetrisRootElement = document.querySelector("#tetris-grid");

export const createGrid = () => {
    for(let i=0; i< GRID_SIZE; i++){
        const singLeBlock = document.createElement("div");
        singLeBlock.classList.add("tetris-grid-item");
        $tetrisRootElement.appendChild(singLeBlock)
    }
    for(let j = 0; j< GRID_WIDTH; j++){
        const extraBlock = document.createElement("div");
        extraBlock.classList.add("tetris-grid-item");
        extraBlock.classList.add("taken");
        extraBlock.classList.add("wall");
        $tetrisRootElement.appendChild(extraBlock);
    }
    return Array.from(document.querySelectorAll(".tetris-grid-item"));
};

export const elements = createGrid();