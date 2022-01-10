module.exports = function reverse(n) {
  let array = "" + n;
  array = array.split('');
  if (array[0] == "-") {
    array.shift();
    return +(array.reverse().join(""));
  } return +(array.reverse().join(""));
}