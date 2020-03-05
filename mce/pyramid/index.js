// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

  
  // get the nth odd number
  Array.prototype.last = function (){
    return this[this.length - 1];
  }
  
  let counter = 1;
  let oddNumbers = new Array();
  while(oddNumbers.length < n){
    if (counter % 2 !== 0){
      oddNumbers.push(counter);
    }
    counter++;
  }

    // for i in n (the no of pyramid steps)
  
    // for j in expectedGroundPys
    //   pyStr += " " except when j is in the middle i.e (Math.ceil(expectedGroundPys/2)) // for first case
    // i.e. for other cases when j is within the range of Math.ceil(expectedGroundPys/2) - i and Math.ceil(expectedGroundPys/2) + i

    let middle = Math.ceil(oddNumbers.last()/2);
    for (let i=1; i <= n; i++){
      let pyStr = "";
      for (let j=1; j <= oddNumbers.last(); j++){
        if (i === 1){
          pyStr += j === middle? "#" : " ";
        } else {
           pyStr += j > middle - i && j < middle + i ? "#" : " ";
        }
      }
      console.log(pyStr)
    }

  }
  

  module.exports = pyramid;