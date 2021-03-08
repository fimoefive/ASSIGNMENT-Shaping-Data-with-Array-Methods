import { customers, businesses } from './data.js';

/* ********************  I  *********************  */

// Practice: Big Spenders
// Use the filter method to get all the big spenders in the main array into a new one.

// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {

});


/* *******************  II  *********************  */

// Practice: Solar System
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


/* *****************  III  *********************  */

// Practice: Spam, Spam, Spam, Spam
/*
Learning Objective: Practice accessing data within an array of objects
You have been tasked with building a list of email addresses of all of our customer's contacts so we can spam them with an email about Miffles the Vampi */

/* *****************  IV  *********************  */

// Challenge: Chaining Methods 
/*
Using one single line of JavaScript code, complete the following tasks on the array of integers below.

Sort the numbers in descending order(10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then subtract 1.
Then output(either in the DOM or the console) the sum of all the resulting numbers. */
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
