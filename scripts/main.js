import { businesses, candies } from '../data.js';

// .forEACH METHOD
const outEl = document.querySelector("#output");
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

  return inNewYork;
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

// Array to contain all the manufacturing businesses
const manufacturingBusinesses = businesses.filter(business => {
  let manufacturing = false

  if (business.companyIndustry === "Manufacturing") {
    manufacturing = true
  }

  return manufacturing;
});

manufacturingBusinesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      <div>${business.addressFullStreet} ${business.addressCity}</div>
      <br>
      <div>${business.addressStateCode} ${business.addressZipCode}</div>
    </section>`;
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

console.table(agents);

agents.forEach(agent => {
  outEl.innerHTML += `
  <h2>${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h2>
  <h3>${agentIn.companyName}</h3 >
  <h4>${agentIn.phoneWork}</h4>`;
  outEl.innerHTML += "<hr/>";
});

// New array to contain all the Purchasing Agents
const agentsInformation = businesses.map(business => {
  return business.purchasingAgent
})
console.table(agentsInformation);

agentsInformation.forEach(agentIn => {
  outEl.innerHTML += `
  <h2>${agentIn.purchasingAgent.nameFirst} ${agentIn.purchasingAgent.nameLast}</h2>
  <h3>${agentIn.companyName}</h3>
  <h4>${agentIn.phoneWork}</h4>`;
  outEl.innerHTML += "<hr/>";
});

// .FIND METHOD
const firstCheapCandy = candies.find(candy => candy.price < 2.00)

console.log(firstCheapCandy);

// LIGHTNING EXERCISE 1 & 2
document
  .querySelector("#companySearch")
  .addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
      /* WHEN  USER PRESSES ENTER, FIND MATCHING Agent */
      const foundAgent = businesses.find(
        business =>
          business.purchasingAgent.includes(keyPressEvent.target.value)
      );

      outEl.innerHTML = `
        <h2>
        ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast} 
        </h2>
        <section>
        ${foundAgent.addressFullStreet}

        </section>
        <section>
        ${foundAgent.addressCity},
        ${foundAgent.addressStateCode}
        ${foundAgent.addressZipCode}
        </section>
    `;
    }
  });

document
  .querySelector("#companySearch")
  .addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
      /* WHEN  USER PRESSES ENTER, FIND MATCHING Agent */
      const foundFirstName = businesses.find(
        business =>
          business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
      );

      outEl.innerHTML = `
        <h2>
        ${foundFirstName.purchasingAgent.nameFirst} ${foundFirstName.purchasingAgent.nameLast} 
        </h2>`;
    }
  });

document
  .querySelector("#companySearch")
  .addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
      /* WHEN  USER PRESSES ENTER, FIND MATCHING Agent */
      const foundLastName = businesses.find(
        business =>
          business.purchasingAgent.nameName.includes(keyPressEvent.target.value),
        business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
      );

      outEl.innerHTML = `
        <h2>
        ${foundLastName.purchasingAgent.nameFirst} ${foundLastName.purchasingAgent.nameLast} 
        </h2>`;
    }
  });

// REDUCE METHOD

// Calculates with forEach Method
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
);
