function between(a, b) {
  // make a blank array
  const result = [];
  /* 
  looping for generating array of all integers 
  between the input parameter, including them
  */
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  // return the array
  return result;
}