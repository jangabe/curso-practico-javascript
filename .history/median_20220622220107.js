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
    median = calculateAritmethicMedian([firstNumber, secondNumber]);
}else{
    median = lista1[mitadLista1];
}