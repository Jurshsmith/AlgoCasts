// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    return str
        .replace(/\W/g, '')
            .split("")
                .reduce((a, c) => a = c.toLowerCase().match(/^[aeiou]$/gi)? a + 1: a, 0);
}

function vowelss(str) {
    const vowels$ = [ 'a', 'e', 'i', 'o', 'u' ];
    return str
        .replace(/\W/g, '')
            .split("")
                .reduce((a, c) => a = vowels$.includes(c.toLowerCase())? a + 1: a, 0);
}

module.exports = vowels;
