const originalPrice = 120;
const discount = 18;
const percentagePriceWithDiscount = 100 - discount;
const priceWithDiscount = (originalPrice *  percentagePriceWithDiscount) / 100;

console.log({originalPrice, discount, percentagePriceWithDiscount, priceWithDiscount});