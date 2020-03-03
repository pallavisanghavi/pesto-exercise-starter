function sumAll(twoNums) {
  var num1 = twoNums[0];
  var num2 = twoNums[1];
  var sum = 0;
  if(num1 > num2){
	  num1 = twoNums[1];
	  num2 = twoNums[0];
  }
  for(let i = num1; i<=num2; i++){
     sum += i;
  }
   return sum;
}

export {
  sumAll,
};
