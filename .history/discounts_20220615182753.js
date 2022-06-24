const originalPrice = 100;
const discount = 15;
const percentagePriceWithDiscount = 100 - discount;
const priceWithDiscount = (originalPrice *  percentagePriceWithDiscount) / 100;

console.log({originalPrice, discount, percentagePriceWithDiscount, priceWithDiscount});