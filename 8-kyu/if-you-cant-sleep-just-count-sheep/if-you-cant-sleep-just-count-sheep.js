var countSheep = function (num){
  return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');
}