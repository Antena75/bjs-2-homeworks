
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d > 0) {
    arr.push(- (b - Math.sqrt(d))/(2*a));
    arr.push(- (b + Math.sqrt(d))/(2*a));
  }
  else if (d === 0) {
    arr.push(- b/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/100;
  let S = amount - contribution;
  let P = percent/12;
  let pay = countMonths * (S * (P + (P / (((1 + P)**countMonths) - 1))));
  return Math.round(pay * 100) / 100;
}