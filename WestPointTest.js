var randomWords = require('random-words');
var isPalindrome = require('is-palindrome');

const totalOfWords = 100000;
const limitOfWords = 10000;

let listOfItems = randomWords(totalOfWords);
let wordsRemaining = [];

let countPalimdroms = 0;

let newList = listOfItems.forEach(item => {
    if(item.length <= 5  && item.length >= 3 &&
        item === item.toLowerCase() &&
        wordsRemaining.length < limitOfWords){
            wordsRemaining.push(item)
            if(isPalindrome(item)){
                countPalimdroms++
            }
        }
})

// If you want to see the list of items just uncomment the line below.
//console.log(`The list of random words is: ${wordsRemaining}.`);

console.log(`The number of Palimdroms is: ${countPalimdroms}.`);