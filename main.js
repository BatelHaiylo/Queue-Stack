function getHigherNumThenPrev(numArr){
    const Result = [0]
    numArr.forEach((num,index) => {
       if(numArr[Result[Result.length-1]]<num){Result.push(index)}
    });
    return Result
}
console.log(getHigherNumThenPrev([3,5,3,6,9,7,8,20,20]))