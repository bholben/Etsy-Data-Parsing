
/*******************************************************************************
 * 1. Calculate the average price of all items.
 */

// Solution using forEach: (WINNER - single loop) ++++++++++++++++++++++

// Initialize a variable to hold the running total of all item prices.
var priceSum = 0;

// Loop through the array and add to the price running total.
items.forEach(function (item, i) { priceSum += item.price; });

// Calculate the average price.
priceAvg = priceSum / items.length;

// Truncate to the nearest penny.
priceAvg = Math.floor(priceAvg * 100) / 100;

// Log out the results.
console.log('The average price is $' + priceAvg);
console.log('');


// Solution using map/reduce: ++++++++++++++++++++++++++++++++++++++++++

// Map an array of prices for each item.
var prices = items.map(function (item) {
  return item.price;
});

// Reduce the prices array (sum them up).
var priceSum = prices.reduce(function (previous, current) {
  return previous + current;
});

// Calculate the average price.
priceAvg = priceSum / items.length;

// Truncate to the nearest penny.
priceAvg = Math.floor(priceAvg * 100) / 100;

// Log out the results.
console.log('The average price is $' + priceAvg);
console.log('');


/*******************************************************************************
 * 2. Show how to get an array of items that cost between $14.00 and $18.00 USD.
 */

// Solution using forEach: (WINNER - single loop) ++++++++++++++++++++++

// Initialize an empty array to hold the values that meet the condition.
var priceCatcher = [];

// Loop through the array and selectively add the title to the price catcher array.
items.forEach(function (item) {
  if (item.price > 14 && item.price < 18) {
    priceCatcher.push(item.title);
  };
});

// Log out the results.
console.log('Items that cost between $14.00 USD and $18.00 USD:', priceCatcher);
console.log('');


// Solution using filter/map: ++++++++++++++++++++++++++++++++++++++++++

// Filter only the items in the price range.
var priceCatcher = items.filter(function (item) {
  return (item.price > 14 && item.price < 18);
});

// Map an array of just the prices from the filtered items.
var titles = priceCatcher.map(function (item) {
  return item.title;
});

// Log out the results.
console.log('Items that cost between $14.00 USD and $18.00 USD:', titles);
console.log('');



/*******************************************************************************
 * 3. Show how to find the item with a "GBP" currency code and print its
 * name and price.
 */

// NOTE: Rather than assuming there is only one GBP item, I'm taking the
// safer route and capturing a GBP array solution.

// Solution using filter/forEach: (WINNER - less code) +++++++++++++++++

// Filter only the British items.
var itemsGBP = items.filter(function (item) {
  return item.currency_code === 'GBP';
});

// Loop through the results array and log out the results.
itemsGBP.forEach(function (item) {
  console.log(item.title + ' costs £' + item.price + '\n');
});
console.log('');


// Solution using forEach/forEach: +++++++++++++++++++++++++++++++++++++

// Initialize an array to hold the items with "GBP" currency.
var itemsGBP = [];

// Loop through the array and selectively add British stuff.
items.forEach(function (item) {
  if (item.currency_code === 'GBP') {
    itemsGBP.push([item.title, item.price]);
  };
});

// Loop through the results array and log out the results.
itemsGBP.forEach(function (item) {
  console.log(item[0] + ' costs £' + item[1] + '\n');
});
console.log('');


/*******************************************************************************
 * 4. Show how to find which items are made of wood.
 */

// Solution using forEach: (WINNER - nothing to return or build) +++++++

// Loop through the array and log out the results.
items.forEach(function (item) {
  if (item.materials.indexOf('wood') !== -1) {
    console.log(item.title + ' is made of wood.');
  };
});
console.log('');


/*******************************************************************************
 * 5. Show how to find which items are made of eight or more materials.
 */

// Solution using filter/forEach: (WINNER - less code) +++++++++++++++++

// Filter only items with lots of materials.
var complexProducts = items.filter(function (item) {
  return item.materials.length >= 8;
});

// Loop through the results array and log out pertinent data.
complexProducts.forEach(function (item) {
  console.log(item.title + ' has ' + item.materials.length + ' materials:');
  item.materials.forEach(function (material) {
    console.log(material);
  });
});
console.log('');


// Solution using forEach/forEach: +++++++++++++++++++++++++++++++++++++

// Initialize an empty array to hold the values that meet the condition.
var complexProducts = [];

// Loop through the array and log out item title if it has 8+ materials.
items.forEach(function (item) {
  if (item.materials.length >= 8) {
    complexProducts.push(item)
  };
});

// Loop through the results array and log out pertinent data.
complexProducts.forEach(function (item) {
  console.log(item.title + ' has ' + item.materials.length + ' materials:');
  item.materials.forEach(function (material) {
    console.log(material);
  });
});
console.log('');


/*******************************************************************************
 * 6. Show how to calculate how many items were made by their sellers
 */

// Solution using filter: (WINNER) +++++++++++++++++++++++++++++++++++++

// Filter only the homemade items.
var homemadeCount = items.filter(function (item) {
  return item.who_made === 'i_did';
});

// Log out the results.
console.log(homemadeCount.length + ' were made by their sellers');
console.log('');


// Solution using forEach: +++++++++++++++++++++++++++++++++++++++++++++

// Initialize a counter.
var homemadeCount = 0;

// Loop through the array and count the homemade items.
items.forEach(function (item) {
  if (item.who_made === 'i_did') {
    homemadeCount++;
  };
});

// Log out the results.
console.log(homemadeCount + ' were made by their sellers');
console.log('');
