const ftoc = function(F) {
  let celsius = (F - 32)*5/9
  return Math.round(celsius * 10)/10
};

const ctof = function(C) {
  let farenheight = (C * 9/5) + 32   
  return Math.round( farenheight * 10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
