const list1=[
    100,
    200,
    300,
    500
];



function calculateAritmethicMedian(list){
    let sumaList =0;
    let sizeList = list.length;
    for(let i=0; i<sizeList; i++){
        sumaList += list[i];
    }
    let promedioList = sumaList1 / sizeList;
    return sizeList;
}