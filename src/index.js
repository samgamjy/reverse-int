module.exports = function reverse (n) {
  let str = String(Math.abs(n)).toString();
  let arr = [];
  for (let i = 0; i < str.length; i += 1) {
      arr.push(str[i]);
  }
  let res = 0;
  let mod = 1;
  for (i = 0; i < arr.length; i ++) {
    res += arr[i] * mod;
    mod *= 10;
  }
  return res;
}
