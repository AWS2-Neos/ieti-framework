/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @param {number} min - Minimium number to calculate random.
 * @param {number} max - Max number given to calculate random
 * @returns Returns random number
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
