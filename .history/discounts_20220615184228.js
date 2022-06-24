/* const originalPrice = 120;
const discount = 18;
const percentagePriceWithDiscount = 100 - discount;
const priceWithDiscount = (originalPrice *  percentagePriceWithDiscount) / 100;*/

function calculatePriceWithDiscount(price, discount){
    const percentagePriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price *  percentagePriceWithDiscount) / 100;
    return priceWithDiscount;
}

function CalculateDiscount(){
    const InputPrice = document.getElementById("InputPrice").value;
    const InputDiscount = document.getElementById("InputDiscount").value;
    return calculatePriceWithDiscount(InputPrice, InputDiscount);
}