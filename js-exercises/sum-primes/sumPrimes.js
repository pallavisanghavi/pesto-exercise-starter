function sumPrimes(num) {
  var sumOfPrimes = 0;
  var isPrime = false;
  for(let i=num; i > 1; i--){
	  for(var j=i-1; j > 1; j--){
		  if(i%j == 0){
			  break;
		  }
	  }
	  if(j == 1){
	   sumOfPrimes += i;
	  }
  }
  return sumOfPrimes;
}

export {
  sumPrimes,
};
