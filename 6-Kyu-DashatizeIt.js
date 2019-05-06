function dashatize(num) {
  var splNum = num.toString().split('');
  var result = [];

  if (num < 0) {
      splNum.shift()
  }
  var even = '';
  for (var k in splNum) {
    if (isNaN(splNum[k])) {
      return 'NaN'
    } 
    if (even.length > 0 && splNum[k] %2 !== 0) {
      result.push(even)
      even = '';
    }
    if (splNum[k] % 2 !== 0) {
      result.push(splNum[k])
    } else {
      even += splNum[k]
    }
  }
  if (even.length > 0) {
    result.push(even)
  }
  return result.join('-')
}
