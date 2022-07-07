import { resetArray } from "./arraymethods.js";
import { addBlocks, addCells, focusFirstCell } from "./cells.js";
import { enableControls } from "./controls.js";

$(() => {
    resetArray();
    addBlocks();
    addCells();
    focusFirstCell();
    enableControls();
});