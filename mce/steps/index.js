// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let pounds = "";

//     for(let i = 1; i <= n; i++){
//         pounds += " ";
//     }

//     for(let i = 0; i < n; i++){
//        pounds = pounds.split("").map((p, j) => i === j? "#": p ).join("");
//        console.log(pounds);
//     }
// }

//another solution
function steps(n) {
    let pounds = "";

    for (let i = 1; i <= n; i++){
        pounds += "#";
        for (let j = 0; j < n - i; j++){
            pounds += " ";
        }
        console.log(pounds, pounds.length);
        pounds = pounds.trim();
    }
}

module.exports = steps;
