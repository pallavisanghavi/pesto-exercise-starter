function duplicateLetters(args) {
  var strArr = args.split("");
  var map = new Map();
  var initial =1;
  var maxKey, maxValue=1;
  for(let char of strArr ){
        if(map.has(char)){
			let val = map.get(char) + 1;
			map.set(char, val);
			if(maxValue < val){
				maxKey = char;
				maxValue = val;
			}
		}
		else{
			map.set(char, initial);
		}
  }
  if(maxValue == initial)
	  return false;
  else
	  return maxValue;
}

export {
  duplicateLetters,
};
