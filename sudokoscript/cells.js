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
            .appendTo(`#block${blockRow}_${blockCol}`);
        }
    }
}