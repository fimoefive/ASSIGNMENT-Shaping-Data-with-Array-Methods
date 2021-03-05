import { businesses, candies } from '../data.js';

// .forEACH METHOD
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});

// .FILTER METHOD
// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
  let inNewYork = false

  if (business.addressStateCode === "NY") {
    inNewYork = true
  }

  return inNewYork
});

newYorkBusinesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      <div>${business.addressFullStreet} ${business.addressCity}</div>
      <br>
      <div>${business.addressStateCode} ${business.addressZipCode}</div>
    </section>
  `;
  outEl.innerHTML += "<hr/>"
});

// .MAP METHOD
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
  return business.purchasingAgent
})

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
  outEl.innerHTML += "<hr/>";
});

// .FIND METHOD
const firstCheapCandy = candies.find(candy => candy.price < 2.00)

console.log(firstCheapCandy)
  > { name: "Tootsie Roll", price: 1.49 }

document
  .querySelector("#companySearch")
  .addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
      /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
      const foundBusiness = businesses.find(
        business =>
          business.companyName.includes(keyPressEvent.target.value)
      );

      outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
    }
  });

// REDUCE METHOD
businesses.forEach(business => {
  /* CALCULATE ORDER SUMMARY */
  let totalOrders = 0
  business.orders.forEach(order => totalOrders += order)


  outEl.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
  outEl.innerHTML += "<hr/>";
});
// .REDUCE() instead of .forEACH
/* CALCULATE ORDER SUMMARY */
let totalOrders = business.orders.reduce(
  (currentTotal, nextValue) => currentTotal += nextValue,
  0
)
