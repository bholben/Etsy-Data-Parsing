
/*******************************************************************************
 * 1. Calculate the average price of all items.
 */

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


/*******************************************************************************
 * 2. Show how to get an array of items that cost between $14.00 and $18.00 USD.
 */

// Initialize an empty array to hold the values that meet the condition.
var priceCatcher = [];

// Loop through the array and selectively add the title to the price catcher array.
items.forEach(function (item) {
  if (item.price > 14 && item.price < 18) {
    // console.log(item.title);
    priceCatcher.push(item.title);
  };
});

// Log out the results.
console.log('Items that cost between $14.00 USD and $18.00 USD:', priceCatcher);


/*******************************************************************************
 * 3. Show how to find the item with a "GBP" currency code and print its
 * name and price.
 */

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


/*******************************************************************************
 * 4. Show how to find which items are made of wood.
 */

// Loop through the array and log out the results.
items.forEach(function (item) {
  if (item.materials.indexOf('wood') !== -1) {
    console.log(item.title + ' is made of wood.');
  };
});


/*******************************************************************************
 * 5. Show how to find which items are made of eight or more materials.
 */

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


/*******************************************************************************
 * 6. Show how to calculate how many items were made by their sellers
 */

// Initialize an array to hold the items with "GBP" currency.
var homemadeCount = 0;

// Loop through the array and selectively add British stuff.
items.forEach(function (item) {
  if (item.who_made === 'i_did') {
    homemadeCount += 1;
  };
});

// Log out the results.
console.log(homemadeCount + ' were made by their sellers');

