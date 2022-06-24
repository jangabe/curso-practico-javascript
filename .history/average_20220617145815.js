function calculateAritmethicMedian(list){
    let sizeList = list.length;
    //let sumaList =0;
    /*for(let i=0; i<sizeList; i++){
        sumaList += list[i];
    }*/
    const sumaList = list.reduce(
        function (acumulatedValue = 0, newValue) {
            return acumulatedValue + newValue;
        }
    );
    let promedioList = sumaList / sizeList;
    return promedioList;
}