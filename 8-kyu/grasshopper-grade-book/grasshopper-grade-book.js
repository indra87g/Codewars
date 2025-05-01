function getGrade (s1, s2, s3) {
  // input argument to array
  const num = [s1, s2, s3];
  // adding all arguments
  const total = num.reduce((sum, value) => sum + value, 0);
  // counting average score
  const score = total / num.length;
  
  if (90 <= score && score <= 100) {
    return 'A'
  } else if (80 <= score && score < 90) {
    return 'B'
  } else if (70 <= score && score < 80) {
    return 'C'
  } else if (60 <= score && score < 70) {
    return 'D'
  } else if (0 <= score && score < 60) {
    return 'F'
  }
}