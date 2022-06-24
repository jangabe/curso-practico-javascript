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