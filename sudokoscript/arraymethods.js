export let array = [];

export function resetArray() {
    array = new Array(9).fill(0).map(x => new Array(9).fill(0));
}