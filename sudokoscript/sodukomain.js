import { resetArray } from "./arraymethods.js";
import { addBlocks, addCells } from "./cells.js";

$(() => {
    resetArray();
    addBlocks();
    addCells();
})