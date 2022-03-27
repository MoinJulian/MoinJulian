import { resetArray } from "./arraymethods.js";
import { toggleSolve } from "./solver.js";

export let delay = 10;

export function enableControls() {
    $("#clearBtn").click(clearSudoku);
    $("#solveBtn").click(toggleSolve);
    // $("#fasterBtn").click(decreaseDelay);
    // $("#slowerBtn").click(increaseDelay);
}

// function decreaseDelay() {
//     if (delay < 10) {
//         delay = 0;
//         $("#fasterBtn").prop("disabled", true);
//     } else {
//         delay /= 2;
//     }
// }

// function increaseDelay() {
//     delay == 0 ? (delay = 10) : (delay *= 2);
//     $("#fasterBtn").prop("disabled", false);
// }

function clearSudoku() {
    $(".cell").val("").removeClass("fixed");
    $("#info").text("");
    resetArray();
}