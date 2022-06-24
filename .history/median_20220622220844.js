function calculateAritmethicMedian(list){
    let sizeList = list.length;
    //let sumaList =0;
    /*for(let i=0; i<sizeList; i++){
        sumaList += list[i];
    }*/
    //The next way replace the for implementation, both are valid s olutions
    const sumaList = list.reduce(
        function (acumulatedValue = 0, newValue) {
            return acumulatedValue + newValue;
        }
    );
    let promedioList = sumaList / sizeList;
    return promedioList;
}

const lista = [
    100000000,
    100,
    200,
    800,
    500,
    3,
    5,
    6,
    8
];

const lista1= lista.sort(function compareNumbers(a, b) {
    return a - b;
  });

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
    let averageFirstSecond = calculateAritmethicMedian([firstNumber, secondNumber]);
    median = averageFirstSecond;
}else{
    median = lista1[mitadLista1];
}