const lista1 = [
    100,
    200,
    500,
    800,
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
    let firstNumber = mitadLista1 - 1;
    let secondNumber =  mitadLista1;

}else{
    median = lista1[mitadLista1];
}