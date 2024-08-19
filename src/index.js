module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let newStr = str;
  let i = 0 ;
  while (i < newStr.length) {
    k = newStr.length;
    bracketsConfig.forEach(value => {
      if (value[0] === newStr[i] && value[1] === newStr[i+1]) {
        deleteEl = newStr[i]+newStr[i+1];
        newStr = newStr.split(deleteEl).join('');
        i = 0;
      }
    })
    if (newStr.length === k ) {
      i = i + 1;
    }
  }
  if (newStr.length === 0) {
    return true;
  }
  else {return false;}

  }
