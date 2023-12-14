const yaho = require('./var')
//let count = {odd, even}
// const {odd, even} = {odd : '홀수', even : '짝수'}

const {odd, even} =yaho;
function checkOddOrEven(num) {
  if(num % 2) {
    return odd;
  } 
  return even;
}
module.exports = checkOddOrEven;


// const {odd : odd, even : even } = { odd: 'cjs 홀수입니다. ', even: 'cjs 짝수입니다.' }

// count.name = personName;
// person.name = John