import {
    hasContradiction,
    getUnsolvedPosition,
    setValue,
} from "./arraymethods.js";
import { sleep } from "./utils.js";
import { delay } from "./controls.js";

let solving = false;

export function toggleSolve() {
    solving ? stopSolve() : startSolve();
}

function stopSolve() {
    solving = false;
    $("#solveBtn").text("Solve");
}

async function startSolve() {
    solving = true;
    $(".cell")
        .filter(function () {
            return $(this).val();
        })
        .addClass("fixed");
    $("#solveBtn").text("Stop");
    $("#info").text("Solving...");
    $(".cell, #clearBtn").prop("disabled", true);
    $("#sudoku").addClass("solving");
    const solution = await solveSudoku();
    if (solution == "stopped") {
        $("#info").text("");
    } else if (solution == true) {
        $("#info").text("The Sudoku is solved.");
    } else if (solution == false) {
        $("#info").text("The Sudoku has no solution.");
    }
    $(".cell, #clearBtn").prop("disabled", false);
    $("#sudoku").removeClass("solving");
    stopSolve();
}

async function solveSudoku() {
    if (delay) await sleep(delay);
    const pos = getUnsolvedPosition();
    if (!pos) return true;
    const { row, col } = pos;
    for (let val = 1; val <= 9; val++) {
        if (!hasContradiction(row, col, val)) {
            setValue(row, col, val);
            if (!solving) return "stopped";
            if ((await solveSudoku()) == true) {
                return true;
            }
        }
    }
    setValue(row, col, 0);
    return false;
}