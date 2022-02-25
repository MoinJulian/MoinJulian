import { array } from "./arraymethods.js";

export function addBlocks() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            $("<div></div>")
            .addClass("block")
            .attr("id", `block${row}_${col}`)
            .appendTo("#soduko");
        }
    }
}


export function addCells() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const blockRow = Math.floor(row / 3);
            const blockCol = Math.floor(col / 3);
            $("<input type='number'>")
            .addClass("cell")
            .attr("id", `cell${row}_${col}`)
            .appendTo(`#block${blockRow}_${blockCol}`)
            .on("input", function () {
                let val = $(this).val();
                if (val.length >= 2) {
                    $(this).val(val.substring(1));
                }
                val = $(this).val();
                if (val == parseInt(val) && val >= 1 && val <= 9) {
                    array[row][col] = val;
                } else {
                    $(this).val("");
                    array[row][col] = 0;
                }
                if (col < 8) {
                    $(`#cell${row}_${col+1}`).focus();
                } else if (row < 8) {
                    $(`#cell${row+1}_${0}`).focus();
                }
            });
        }
    }
}