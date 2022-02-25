import { resetArray } from "./arraymethods.js";
import { startSolve } from "./solver.js";

export function enableControls() {
    $("#clearBtn").on("click", clearSudoku);
    $("#soveBtn").on("click", startSolve);
}

function clearSudoku() {
    $(".cell").val("");
    $("#info").text("");
    resetArray();
}
