// Random Library

// Return a random decimal between low (inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low
}

// Return a random integer between low (inclusive) and high (exclusive)
function randomInt(low, high) {
    return Math.floor(randomDec(low, high));
}

// Return a random rgb string
function randomRGB() {
    return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(0, 256)})`;
}

// Return a random array element
function randomElement(anArray) {
    return anArray[randomInt(0, anArray.length)]
}