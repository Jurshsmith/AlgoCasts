// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



// function capitalize(str) {
//     return str.split(" ").map(eachWord => eachWord.slice(0, 1).toUpperCase() +  eachWord.slice(1, eachWord.length)).join(" ");
// }

// other solution
function capitalize(str) {
    let results = "";
    const newStr = str.trim(); 

    // lesson here the x in the loop is the index in string
    for (x in newStr){
        if (x == 0){
            results += newStr[x].toUpperCase();
        }
        else if ((str[x - 1] === " "  && str[x] !== " ")){
            results += str[x].toUpperCase();
        } else {
            results += str[x];
        }
    }
    return results;
}

module.exports = capitalize;
