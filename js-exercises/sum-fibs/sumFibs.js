function sumFibs(num) {
  var num1 = 0;
  var num2 = 1;
  var sum = 0;
  var total = 1;
  while(num2 <= num){
	if(num2 %2 != 0){
		sum = sum + num2;
	}
    total = num1 + num2;
	num1 = num2;
	num2 = total;
	
  }
  return sum;

}

export {
  sumFibs,
};
