function insertionSort(arr){
    var len = arr.length;
    var curValue,preIndex;
    for(var i = 1;i < len;i++){
        curValue = arr[i];
        preIndex = i-1;
        while(preIndex >= 0 && arr[preIndex] > curValue){
            arr[preIndex + 1] =arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = curValue;
    }
    return arr;
}
insertionSort([5,4,3,2,1]);