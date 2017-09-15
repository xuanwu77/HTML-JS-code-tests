function selectionSort(arr){
    var len = arr.length;
    var minIndex,temp;
    for(var i = 0; i < len -1;i++){
        minIndex = i;
        for(var j = i; j < len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
selectionSort([5,4,3,2,1]);