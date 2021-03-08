import { customers, businesses } from './data.js';

/* ********************  I  *********************  */

// Practice: Big Spenders
// Use the filter method to get all the big spenders in the main array into a new one.

// Array to contain all the big spenders
<<<<<<< HEAD
const htmlId = document.querySelector("#output");
htmlId.innerHTML = "<h1>Big Spenders</h1>"

const bigSpenders = businesses.forEach(business => {
  business.orders.filter(element => {
    let hightAmount = false;
    if (element >= 8500) {
      hightAmount = true;
    }
  });
  return hightAmount;
});

bigSpenders.forEach(bigMoney => {
  htmlId.innerHTML += `
    <h2>${bigMoney.companyName}</h2>
    <h4>${bigMoney.addressFullStreet}</h4>
    <h3>${bigMoney.addressCity}, ${bigMoney.addressStateCode} ${bigMoney.addressZipCode}</h3>`;
  const bigSpenders = businesses.filter(business => {

  });


  /* *******************  II  *********************  */

  // Practice: Solar System
  const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

  /*
      Use the forEach method to add the name of each planet
      to a section element in your HTML with an id of "planets".
      Use string templates to construct the DOM elements.
  */
  const planetEl = document.getElementById("planets");
  planetEl.innerHTML = "<h1>PLANETS</h1>";
  planets.forEach(planet => {
    return planetEl.innerHTML += `<h2>${planet}</h2>`;
  });

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
  const emailList = document.querySelector("#output");
  emailList.innerHTML = "<h2>Customer Emails</h2>"

  customers.forEach(customer => {
    emailList.innerHTML += `
    <h3>${customer.first_name}</h3>
    <div>
      ${customer.contacts.email}
    </div>`;
    emailList.innerHTML += "<hr/>"
  });

  /* *****************  IV  *********************  */

  // Challenge: Chaining Methods 
  /*
  Using one single line of JavaScript code, complete the following tasks on the array of integers below.
  
  Sort the numbers in descending order(10, 9, 8, 7, etc).
  Remove any integers greater than 19.
  Multiply each remaining number by 1.5 and then subtract 1.
  Then output(either in the DOM or the console) the sum of all the resulting numbers. */
  const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

  const numbers = integers.sort((a, b) => (b - a)).filter(number => number > 19)
    .map(times => times * 1.5 - 1)
    .reduce(
      (numberTotal, nextValue) => numberTotal += nextValue,
      0
    );

  console.log(numbers);
=======
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
>>>>>>> 394d75f2a6769c3ad507dfeeee8433cb20aa9d31
