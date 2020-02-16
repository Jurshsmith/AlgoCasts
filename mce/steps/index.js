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
// function steps(n) {
//     let pounds = "";

//     for (let i = 1; i <= n; i++){
//         pounds += "#";
//         for (let j = 0; j < n - i; j++){
//             pounds += " ";
//         }
//         console.log(pounds, pounds.length);
//         pounds = pounds.trim();
//     }
// }

//another solution
// function steps(n) {

//     for (let i = 0; i < n; i++){
//         let pounds = "";
//         for (let j = 0; j < n ; j++){
//             if (j <= i){
//                 pounds += "#";
//             } else {
//                 pounds += " ";
//             }
//         }
//         console.log(pounds);
//     }
// }


//recursive solution
function steps(n, m=0, l=0, pounds=""){
    if (n === m){
      return;
    }
    if (l === n ){
        console.log(pounds);
        return steps(n, m + 1, 0, "");
    }
    if (l <= m){
        pounds += "#";
    } else{
        pounds += " ";
    }
  
    steps(n, m, l + 1, pounds);
  
}

module.exports = steps;
