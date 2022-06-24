import arit from './average'
const lista1 = [
    100,
    200,
    500,
    100000000
];

const lista1Size =  lista1.length;

const mitadLista1 =  parseInt(lista1Size/2);

function isEven(number) {
    if (number%2 === 0) {
        return true;
    }
    return false;
};

let median;

if(isEven(lista1Size)){
    let firstNumber = lista1[mitadLista1 - 1];
    let secondNumber =  lista1[mitadLista1];
    debugger;
    median =  arit.calculateAritmethicMedian([firstNumber, secondNumber]);

}else{
    median = lista1[mitadLista1];
}