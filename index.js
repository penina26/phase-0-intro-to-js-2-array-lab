// Write your solution here!
// Define the 'cats' array
const cats = ["Milo", "Otis", "Garfield"];

// Define the function that will be tested
// --- Destructive Functions (modify the original 'cats' array) ---
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}


// --- Non-Destructive Functions (return a new array) ---

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}
