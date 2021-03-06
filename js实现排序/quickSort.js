/* "快速排序"的思想很简单，整个排序过程只需要三步：
　　（1）在数据集之中，选择一个元素作为"基准"（pivot）。(基准值可以任意选择，但是选择中间的值比较容易理解。)
　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。 */

function quickSort(arr){ 
    //不需要把arr的长度缓存出来，即var len = arr.length; 因为下面splice会改变该len。
    if(arr.length <= 1 ){ return arr;}
    var index = Math.floor(arr.length / 2),
        valueOfIndex = arr.splice(index,1)[0];
    var left =[],right=[];
    for(var i = 0;i < arr.length;i++){
        if(arr[i] < valueOfIndex){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        } 
    }
    return quickSort(left).concat(valueOfIndex,quickSort(right));
}
quickSort([5,4,3,2,1]);