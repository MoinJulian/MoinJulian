import { resetArray } from "./arraymethods.js";
import { addBlocks, addCells, focusOnFirstCell } from "./cells.js";
import { enableControls } from "./controls.js";
import { startSolve } from "./solver.js";

$(() => {
    resetArray();
    addBlocks();
    addCells();
    focusOnFirstCell();
    enableControls();
    startSolve
});