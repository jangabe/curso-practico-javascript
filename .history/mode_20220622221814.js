const list=[
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const listCount = {};
list.map(
    function(element){
        if(listaCount[element]){
            listaCount[element] += 1;
        }else{
            listaCount[element] = 1;
        }
    }    
);