function combinaisons(n) {
  let result = [];
  for (let i = 0; i < Math.pow(10, n); i++) {
    let num = i.toString().padStart(n, '0');
    result.push(num);
  }
  return result;
}