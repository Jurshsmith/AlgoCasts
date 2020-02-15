// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
new String("ds").sli
function capitalize(str) {
    return str.split(" ").map(eachWord => eachWord.slice(0, 1).toUpperCase() +  eachWord.slice(1, eachWord.length)).join(" ");
}

module.exports = capitalize;
