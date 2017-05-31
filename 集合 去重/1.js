process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function getResult(){
    var inputArr = input.split(' ');
    w = inputArr[0];
    x = inputArr[1];
    y = inputArr[2];
    z = inputArr[3];
    var resArr=[];    //数组用来存放结果
    if ((x>=1&&x<=100) && (z>=1&&z<=100)){
        if ((w>=1&&w<=x) && (y>=1&&y<=z)){
            for (p=w;p<=x;p++){
                for (q=y;q<=z;q++){
                       res = p/q;
                      resArr.push(res);                                
                }
            }       
        }else{
            alert("w或者y的值不在范围内");
        }
    }else{
            alert("x或者z的值不在范围内");
        }
    
    
  var result=[];
  for(var i=0; i<resArr.length; i++){
    if(result.indexOf(resArr[i])==-1){
      result.push(resArr[i])
    }
  }
    console.log(result.length);
});


