//Helpers
//this is the same code on average.js file
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
///////////////////////////////////////////////

function isEven(number){
    return (number % 2 ===0);
}

//Calculator of median
function medianSalaries(list){
    let listSize =  list.length;
    let middleSalary;
    const middle = parseInt(listSize/2);
    if(isEven(listSize)){
        let firstSalary = list[middle - 1];
        let secondSalary = list[middle];
        middleSalary = calculateAritmethicMedian([firstSalary, secondSalary]);
    }else{
        middleSalary = list[middle];
    }
    return middleSalary;
}

//General median
const salariesCol = colombia.map(
    function (person){
        return person.salary;
    }
);

const salariesColSorted = salariesCol.sort(
    function(a, b){
        return a - b;
    }
);

//Median of top ten percent
const spliceStart = (salariesColSorted.length * 90)/100;
const spliceCount = salariesColSorted.length - spliceStart;

const salariesColTop10 = salariesColSorted.splice(
    spliceStart,
    spliceCount
);


const generalMedianCol = medianSalaries(salariesColSorted);
const generalTop10MedianCol = medianSalaries(salariesColTop10);

console.log({generalMedianCol, generalTop10MedianCol});