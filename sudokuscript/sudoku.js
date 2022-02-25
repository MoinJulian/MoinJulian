import { resetArray } from "./arraymethods.js";
import { addBlocks, addCells, focusOnFirstCell } from "./cells.js";

$(() => {
    resetArray();
    addBlocks();
    addCells();
    focusOnFirstCell();
})