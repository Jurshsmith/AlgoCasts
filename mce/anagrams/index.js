
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


module.exports = (A = a.replace(/\W/gi, "").toLowerCase(), B = b.replace(/\W/gi, "").toLowerCase()) => {

    // using Character maps
    const charMapper = char => char.split("").reduce((a, c) => {
            if (!a[c]){
                a[c] = 1;
                return a;
            }
            a[c] = a[c] + 1;
            return a;
    }, {});

    const checkIfAnagram = (charMapA, charMapB) => Object.keys(charMapA).reduce((acc, char) => {
            if (!charMapB[char]){
                acc = false;
                return acc;
            }
            else if (charMapA[char] !== charMapB[char]){
                acc = false;
                return acc;
            }
            return acc;
        }, true);



    return k = (A.length > B.length)? checkIfAnagram(charMapper(A), charMapper(B)): checkIfAnagram(charMapper(B), charMapper(A));
  

}

// you can declare js functions params and declare variables in that parenthesis

// character mapping is a good skill to solve letter or character problems where you count the number of characters in a word and map every character to the number of times they appear in that word or sentence

// \s is whitespace character, \S is non-whitespace character
// \d is for digits, \D is for non-digits character
// \w is for word character, \W is for non-word character
// ^n a string that begins with n
// n$ a string that ends with n

// str.replace(regExp, string) => returns a string