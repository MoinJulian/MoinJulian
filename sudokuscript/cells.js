import { hasContradiction, array, setValue } from "./arraymethods.js";

export function addBlocks() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            $("<div></div>")
                .addClass("block")
                .attr("id", `block${row}_${col}`)
                .appendTo("#sudoku");
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
                    $(".cell").removeClass("fixed");
                    let val = $(this).val();
                    if (val.length >= 2) {
                        $(this).val(val.substring(1));
                    }
                    val = $(this).val();
                    let contra = false;
                    if (
                        val == parseInt(val) &&
                        val >= 1 &&
                        val <= 9
                    ) {
                        contra = hasContradiction(
                            row,
                            col,
                            parseInt(val)
                        );
                        if (contra) {
                            setValue(row, col, 0);
                            $("#info").text(
                                "This number is not allowed"
                            );
                            setTimeout(
                                () => $("#info").text(""),
                                1000
                            );
                        } else {
                            array[row][col] = parseInt(val);
                        }
                    } else {
                        $(this).val("");
                        array[row][col] = 0;
                    }
                    if (!contra) {
                        if (col < 8) {
                            $(`#cell${row}_${col + 1}`).focus();
                        } else if (row < 8) {
                            $(`#cell${row + 1}_${0}`).focus();
                        }
                    }
                });
        }
    }
}

export function focusFirstCell() {
    $(`.cell`)[0].focus();
}