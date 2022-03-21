export function sleep(duration) {
    return new Promise((res) => setTimeout(res, duration));
}