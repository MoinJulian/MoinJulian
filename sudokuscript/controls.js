import { resetArray } from "./arraymethods.js";

export function enableControls() {
    $("#clearBtn").on("click", clearSudoku);
}

function clearSudoku() {
    $(".cell").val("");
    $("#info").text("");
    resetArray();
}
