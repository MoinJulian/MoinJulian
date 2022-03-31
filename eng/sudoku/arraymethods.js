export let array = [];

export function resetArray() {
    array = new Array(9).fill(0).map((x) => new Array(9).fill(0));
}

export function hasContradiction(row, col, val) {
    return (
        rowValues(row).includes(val) ||
        columnValues(col).includes(val) ||
        boxValues(row, col).includes(val)
    );
}

function rowValues(row) {
    return array[row];
}

function columnValues(col) {
    const list = [];
    for (let row = 0; row < 9; row++) {
        list.push(array[row][col]);
    }
    return list;
}

function boxValues(row, col) {
    const boxRow = row - (row % 3);
    const boxCol = col - (col % 3);
    const list = [];
    for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
            list.push(array[r][c]);
        }
    }
    return list;
}

export function getUnsolvedPosition() {
    const row = array.findIndex((row) => row.some((x) => x == 0));
    if (row == -1) {
        return null;
    }
    const col = array[row].findIndex((x) => x == 0);
    return { row, col };
}

export function setValue(row, col, val) {
    array[row][col] = parseInt(val);
    $(`#cell${row}_${col}`).val(val >= 1 ? val : "");
}