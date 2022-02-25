import { resetArray } from "./arraymethods.js";

export function enableControls() {
    $("#clearBtn").on("click", clearSudoku);
    $("#soveBtn").on("click", startSolve);
}

function clearSudoku() {
    $(".cell").val("");
    $("#info").text("");
    resetArray();
}
